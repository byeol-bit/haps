import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
  SidebarSubSideMenu,
} from "@/components/ui/sidebar"
import { MapProvider, VworldMap } from "@/components/ui/vworld-map"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarSubSideMenu className="absolute top-0 left-[--sidebar-width] z-10 shadow-[6px_0_10px_rgba(0,0,0,0.1)]"/>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1"/>
            <Separator orientation="vertical" className="mr-2 h-4" />
          </div>
        </header>
        <MapProvider>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
              <VworldMap/>
          </div>
          
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50"/>
            <div className="aspect-video rounded-xl bg-muted/50"/>
            <div className="aspect-video rounded-xl bg-muted/50"/>
          </div>
        </MapProvider>
      </SidebarInset>
    </SidebarProvider>
  );
}
