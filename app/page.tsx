import { SearchBar } from "@/components/search-bar"
import { Map } from "@/components/map"
import { RouteButtons } from "@/components/route-buttons"

export default function Home() {
  return (
    <div className="relative h-[calc(100vh-3.5rem)]">
      <Map className="w-full h-full" />
      <div className="absolute top-4 left-4 right-4 z-10">
        <SearchBar />
      </div>
      <div className="absolute bottom-4 left-4 z-10">
        <RouteButtons />
      </div>
    </div>
  )
}

