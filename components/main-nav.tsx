import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"

export function MainNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">Pollution-Aware Traffic Navigator</span>
        </Link>
        <nav className="flex flex-1 items-center justify-end space-x-4">
          <Link href="/dashboard" className="text-sm font-medium">
            Dashboard
          </Link>
          <Link href="/profile" className="text-sm font-medium">
            Profile
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  )
}

