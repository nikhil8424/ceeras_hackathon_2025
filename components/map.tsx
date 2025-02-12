import type React from "react"
import { cn } from "@/lib/utils"

interface MapProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Map({ className, ...props }: MapProps) {
  return (
    <div className={cn("bg-muted", className)} {...props}>
      {/* Placeholder for Google Maps */}
      <div className="flex h-full items-center justify-center text-muted-foreground">
        Interactive Map
        <br />
        (Google Maps API integration would go here)
      </div>
    </div>
  )
}

