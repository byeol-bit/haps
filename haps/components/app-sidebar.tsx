"use client"

import * as React from "react"
import {
  BookOpen,
  Bot,
  Command,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
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
      url: "#",
      icon: "/lnb_menu4.png",
      items: [
        {
          title: "분석자료 조회",
          url: "#",
        },
      ],
    },
    {
      title: "HAPS 위해도분석",
      url: "#",
      icon: "/lnb_menu5.png",
      items: [
        {
          title: "분석자료 조회",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">산단 HAPS</span>
                  <span className="truncate text-xs">(주) 이투엠쓰리</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain title={'공간분석'} items={data.navMain} />
        <NavMain title={'자료분석'} items={data.navData} />
        {/*
        <NavProjects projects={data.projects} />
        */}
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>

    </Sidebar>
  )
}
