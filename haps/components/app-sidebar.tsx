"use client"

import * as React from "react"
import {
  Command,
  ChevronsUpDown,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavData } from "@/components/nav-data"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuButton,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const data = {
  navPage: [
    {
      title: "공간분석",
      url: "/dashboard",
      icon: "",
    },
    {
      title: "자료분석",
      url: "/chart",
      icon: "",
    },
  ],
  user: {
    name: "developer",
    email: "sshkww@e2m3.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "배출량",
      url: "#",
      icon: "/lnb_menu1.png",
      isActive: true,
      items: [
        {
          title: "CAPSS",
          url: "#",
        },
        {
          title: "SEMS",
          url: "#",
        },
        {
          title: "PRTR",
          url: "#",
        },
      ],
    },
    {
      title: "기상",
      url: "#",
      icon: "/lnb_menu2.png",
      items: [
        {
          title: "기상요소",
          url: "#",
        },
        {
          title: "바람장미",
          url: "#",
        },
      ],
    },
    {
      title: "대기질",
      url: "#",
      icon: "/lnb_menu3.png",
      items: [
        {
          title: "오염물질",
          url: "#",
        },
        {
          title: "농도장미",
          url: "#",
        },
      ],
    },
    {
      title: "HAPS 측정결과",
      url: "#",
      icon: "/lnb_menu4.png",
      items: [
        {
          title: "유해대기측정망",
          url: "#",
        },
        {
          title: "고정측정(연구)",
          url: "#",
        },
        {
          title: "이동측정(연구)",
          url: "#",
        },
      ],
    },
    {
      title: "HAPS 모델결과",
      url: "#",
      icon: "/lnb_menu5.png",
      items: [
        {
          title: "격자별농도(연구)",
          url: "#",
        },
        {
          title: "격자별위해도(연구)",
          url: "#",
        },
      ],
    },
  ],
  navData: [
    {
      title: "HAPS 농도분석",
      url: "/chart/density",
      icon: "/lnb_menu4.png",
    },
    {
      title: "HAPS 위해도분석",
      url: "/chart/risk-assessment",
      icon: "/lnb_menu5.png",
    },
  ],
}

export function DashboardSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton size="lg">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    <Command className="size-4" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">산단 HAPS</span>
                    <span className="truncate text-xs">(주) 이투엠쓰리</span>
                  </div>
                  <ChevronsUpDown className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[200px]"
                side="bottom"
                align="center"
                sideOffset={4}
              >
                {data.navPage.map((item, index) => (
                  <DropdownMenuItem key={index}>
                    <DropdownMenuButton
                      title={item.title}
                      url={item.url}
                    >{item.title}
                    </DropdownMenuButton>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
          <NavMain title={'공간분석'} items={data.navMain} />
      </SidebarContent>
    </Sidebar>
  )
}
export function ChartSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton size="lg">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    <Command className="size-4" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">산단 HAPS</span>
                    <span className="truncate text-xs">(주) 이투엠쓰리</span>
                  </div>
                  <ChevronsUpDown className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[200px]"
                side="bottom"
                align="center"
                sideOffset={4}
              >
                {data.navPage.map((item, index) => (
                  <DropdownMenuItem key={index}>
                    <DropdownMenuButton
                      title={item.title}
                      url={item.url}
                    >{item.title}
                    </DropdownMenuButton>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
          <NavData title={'자료분석'} items={data.navData} />
      </SidebarContent>

    </Sidebar>
  )
}
