"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import { defaults as defaultControls } from 'ol/control';

import { cn } from "@/lib/utils"

const MapContext = createContext<Map | null>(null);

let VWORLD_API_KEY = 'FB929D48-2E50-357C-97A0-28C63FD9B0BC';

const MapProvider = ({children, className} : {children?: React.ReactNode, className?:string}) => {
  const [map, setMap] = useState<Map | null>(null);
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
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

  return (
    <MapContext.Provider value={map}>
      <div 
        ref={mapRef} 
        className={cn("h-full w-full overflow-hidden", className)}/>
      {children}
    </MapContext.Provider>
  );
};

const useMap = () => {
  const context = useContext(MapContext);
  if (!context) throw new Error("useMap must be used within a MapProvider");
  return context;
};

export {MapProvider, useMap}