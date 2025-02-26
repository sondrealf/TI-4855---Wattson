import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, History, Plus, Settings } from "lucide-react"

export function Footer() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t bg-white/80 backdrop-blur-lg supports-[backdrop-filter]:bg-white/60 p-2 z-50">
      <div className="container max-w-md mx-auto">
        <div className="flex justify-around items-center">
          <Link href="/">
            <Button variant="ghost" size="icon" className="flex flex-col items-center">
              <Home className="h-5 w-5" />
              <span className="text-xs mt-1">Home</span>
            </Button>
          </Link>
          <Link href="/history">
            <Button variant="ghost" size="icon" className="flex flex-col items-center">
              <History className="h-5 w-5" />
              <span className="text-xs mt-1">History</span>
            </Button>
          </Link>
          <Link href="/devices">
            <Button variant="ghost" size="icon" className="flex flex-col items-center">
              <Plus className="h-5 w-5" />
              <span className="text-xs mt-1">Add</span>
            </Button>
          </Link>
          <Link href="/settings">
            <Button variant="ghost" size="icon" className="flex flex-col items-center">
              <Settings className="h-5 w-5" />
              <span className="text-xs mt-1">Settings</span>
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

