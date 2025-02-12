import type React from "react"
import { Button } from "@/components/ui/button"
import { Rocket, Leaf, Scale } from "lucide-react"
import { cn } from "@/lib/utils"

interface RouteButtonsProps extends React.HTMLAttributes<HTMLDivElement> {}

export function RouteButtons({ className, ...props }: RouteButtonsProps) {
  return (
    <div className={cn("flex gap-2", className)} {...props}>
      <Button size="sm" variant="default">
        <Rocket className="mr-2 h-4 w-4" /> Fastest
      </Button>
      <Button size="sm" variant="secondary">
        <Leaf className="mr-2 h-4 w-4" /> Eco-Friendly
      </Button>
      <Button size="sm" variant="outline">
        <Scale className="mr-2 h-4 w-4" /> Balanced
      </Button>
    </div>
  )
}

