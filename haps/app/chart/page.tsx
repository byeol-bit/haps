"use client"

import * as React from "react"
import { ChartSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import AppSubSideBar from "@/components/app-subsidebar"
import ChartRisk from "@/components/chart-risk"
import ChartDensity from "@/components/chart-density"

export default function Page() {
  const { selectedMenu } = useSidebar()
  const [component, setComponent] = React.useState<React.ReactNode>(null)

  React.useEffect(() => {
    switch (selectedMenu) {
      case "HAPS 농도분석":
        setComponent(ChartDensity)
        break;
      case "HAPS 위해도분석":
        setComponent(ChartRisk)
        break;
      default:
        setComponent(null)
    }
  }, [selectedMenu])

  return (
    <>
      <ChartSidebar />
      <AppSubSideBar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
          </div>
        </header>
        {component}
      </SidebarInset>
    </>
  );
}
