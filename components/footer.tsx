"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, History, Settings, Car, HomeIcon, WashingMachineIcon as Washing } from "lucide-react"

export function Footer() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t bg-blue-50 backdrop-blur-lg supports-[backdrop-filter]:bg-blue-50 p-2 z-50">
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
            <Button variant="ghost" size="icon" className="flex flex-col items-center relative">
              <div className="relative">
                <Car className="h-5 w-5 absolute -left-4 top-0" />
                <HomeIcon className="h-5 w-5" />
                <Washing className="h-5 w-5 absolute -right-4 top-0" />
              </div>
              <span className="text-xs mt-1">Devices</span>
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

