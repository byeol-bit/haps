import * as React from "react"

import ChartRisk from "@/components/chart-risk"


const useComponent = ({ title }: { title: string }) => {
  const [component, setComponent] = React.useState<React.ReactNode>(null)

  React.useEffect(() => {
    switch(title) {
      case "":
        setComponent(ChartRisk)
        break
        default:
          setComponent(null)
    }
  }, [])

  return component
}

export { useComponent }