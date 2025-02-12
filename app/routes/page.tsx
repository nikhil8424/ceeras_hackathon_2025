import { Map } from "@/components/map"
import { RouteInfo } from "@/components/route-info"

export default function RoutesPage() {
  return (
    <div className="relative h-[calc(100vh-3.5rem)]">
      <Map className="w-full h-full" />
      <div className="absolute top-4 right-4 w-80 space-y-4 z-10">
        <RouteInfo type="fastest" time="25 min" congestion="Medium" aqi={75} efficiency={85} />
        <RouteInfo type="eco" time="30 min" congestion="Low" aqi={50} efficiency={95} />
        <RouteInfo type="balanced" time="28 min" congestion="Low-Medium" aqi={60} efficiency={90} />
      </div>
    </div>
  )
}

