"use client";

import * as React from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import { defaults as defaultControls } from 'ol/control';

import { cn } from "@/lib/utils"

type MapContext = {
  map : Map | null
  mapRef : React.MutableRefObject<HTMLDivElement | null>
}

const MapContext = React.createContext<MapContext | null>(null);

// 해야할 일 : api키 자동연동 시키기
let VWORLD_API_KEY = 'FB929D48-2E50-357C-97A0-28C63FD9B0BC';

const useMap = () => {
  const context = React.useContext(MapContext);
  if (!context) throw new Error("useMap must be used within a MapProvider");
  return context;
};

const MapProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(
  (
    {
      children, 
      className, 
      ...props
    },
    ref
  ) => {
  const [map, setMap] = React.useState<Map | null>(null);
  const mapRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!mapRef.current) return;

    // Map 초기화
    const mapInstance = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://api.vworld.kr/req/wmts/1.0.0/' + VWORLD_API_KEY + '/Base/{z}/{y}/{x}.png',
            projection: "EPSG:3857",
          }),
        }),
      ],
      view: new View({
        projection: "EPSG:4326",
        center: [127.918556, 36.92123],
        zoom: 10,
        minZoom: 6,
        maxZoom: 19,
      }),
      controls: defaultControls({ zoom: false, rotate: false, }),
    });

    setMap(mapInstance);

    // 컴포넌트 언마운트 시 cleanup
    return () => mapInstance.setTarget(undefined);
  }, []);

  const contextValue = React.useMemo<MapContext>(
    () => ({
      map,
      mapRef
    }),
    [map, mapRef]
  );

  return (
    <MapContext.Provider value={contextValue}>
      <div 
        ref={ref} 
        className={cn("relative flex flex-1 flex-col gap-4 p-4 pt-0", className)}
      >
      {children}
      </div>
    </MapContext.Provider>
  )
})
MapProvider.displayName = "MapProvider"

const VworldMap = React.forwardRef<
  HTMLDivElement, 
  React.ComponentPropsWithoutRef<"div">
>(
  (
    {
      className,
      children,
      ...props
    },
    ref
  ) => {
    const {mapRef} = useMap()

    return (
      <div 
        ref={mapRef} 
        className={cn("w-full h-full rounded-xl overflow-hidden", className)} {...props}
        {...props}
      >
      {children}
      </div>
    )
  }
)

export {MapProvider, VworldMap, useMap}