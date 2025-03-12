"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarDataMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar"
import Image from "next/image"

export function NavData({
  title,
  items,
}: {
  title:string,
  items: {
    title: string
    url: string
    icon: string
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  const { activeSubMenu, setActiveSubMenu } = useSidebar();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{title}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarDataMenuButton title={item.title} url={item.url}>
              <Image src={item.icon} alt={item.title} width={42} height={42}></Image>
              <span>{item.title}</span>
            </SidebarDataMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}