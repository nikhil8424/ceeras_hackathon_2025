import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rocket, Leaf, Scale } from "lucide-react"

interface RouteInfoProps {
  type: "fastest" | "eco" | "balanced"
  time: string
  congestion: string
  aqi: number
  efficiency: number
}

export function RouteInfo({ type, time, congestion, aqi, efficiency }: RouteInfoProps) {
  const icon =
    type === "fastest" ? (
      <Rocket className="h-5 w-5" />
    ) : type === "eco" ? (
      <Leaf className="h-5 w-5" />
    ) : (
      <Scale className="h-5 w-5" />
    )

  const title = type === "fastest" ? "Fastest" : type === "eco" ? "Eco-Friendly" : "Balanced"

  return (
    <Card className="bg-background/80 backdrop-blur-sm">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            {icon}
            <span className="font-semibold">{title}</span>
          </div>
          <span className="text-lg font-bold">{time}</span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-sm">
          <div>
            <p className="font-medium">Traffic</p>
            <Badge variant="outline" className="mt-1">
              {congestion}
            </Badge>
          </div>
          <div>
            <p className="font-medium">AQI</p>
            <p className="mt-1">{aqi}</p>
          </div>
          <div>
            <p className="font-medium">Efficiency</p>
            <p className="mt-1">{efficiency}%</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

