"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export function SearchBar() {
  const [pickup, setPickup] = useState("")
  const [dropoff, setDropoff] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    console.log("Searching for route from", pickup, "to", dropoff)
  }

  return (
    <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2">
      <Input
        type="text"
        placeholder="Pickup location"
        value={pickup}
        onChange={(e) => setPickup(e.target.value)}
        className="flex-1"
      />
      <Input
        type="text"
        placeholder="Drop-off location"
        value={dropoff}
        onChange={(e) => setDropoff(e.target.value)}
        className="flex-1"
      />
      <Button type="submit" className="w-full sm:w-auto">
        <Search className="mr-2 h-4 w-4" /> Find Routes
      </Button>
    </form>
  )
}

