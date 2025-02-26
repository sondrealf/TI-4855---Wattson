"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="relative mb-6 bg-gradient-to-br from-blue-600 to-blue-400 rounded-3xl p-6 text-white">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h1 className="text-2xl font-medium mb-1">{title}</h1>
          {subtitle && <p className="text-sm opacity-90">{subtitle}</p>}
        </div>
        <Link href="/settings">
          <Button variant="ghost" size="icon" className="rounded-full bg-white/10 hover:bg-white/20">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder-user.jpg" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </Button>
        </Link>
      </div>
    </div>
  )
}

