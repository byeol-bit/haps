"use client"
import * as React from "react"
import { useSidebar } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Slot } from "@radix-ui/react-slot"

const SUB_SIDEBAR_WIDTH = "16rem"

const SubSideBar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {

  }
>(
  (
    {
      className,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const { stateSub } = useSidebar()

    return (
      <div
        ref={ref}
        style={
          {
            "--sub-sidebar-width": SUB_SIDEBAR_WIDTH,
            ...style,
          } as React.CSSProperties
        }
        className="group peer text-sidebar-foreground md:block"
        data-state={stateSub}
      >
        <div
          className={cn(
            "relative h-svh w-[--sub-sidebar-width]",
            "group-data-[state=collapsed]:w-0",
            "p-2 ",
             className
          )}
          {...props}
        >
          <div
            className={cn(
              "w-full h-full rounded-lg bg-sidebar",
              "group-data-[state=expanded]:border group-data-[state=expanded]:border-sidebar-border group-data-[state=expanded]:shadow",
              className
            )}>
            {children}
          </div>
          
        </div>
        
      </div>
    )
  }
)
SubSideBar.displayName = "SubSidebar"

const SubSidebarTrigger = React.forwardRef<
React.ElementRef<typeof Button>,
React.ComponentProps<typeof Button>
>(({className, onClick, ...props}, ref) => {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      ref={ref}
      data-sidebasr="trigger"
      variant="ghost"
      size="icon"
      className={cn("h-7 w-7", className)}
      onClick={(event)=> {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <span className="sr-only">Toggle sidebar</span>
    </Button>
  )
})
SubSidebarTrigger.displayName = "SubSidebarTrigger"


export { SubSideBar }
