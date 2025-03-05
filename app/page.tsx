"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, Battery } from "lucide-react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const data = [
  { time: "00:00", value: 0.23 },
  { time: "03:00", value: 0.28 },
  { time: "06:00", value: 1.45 },
  { time: "06:01", value: 1.65 },
  { time: "06:59", value: 1.35 },
  { time: "07:00", value: 1.45 },
  { time: "09:00", value: 1.00 },
  { time: "12:00", value: 0.9 },
  { time: "15:00", value: 1.51 },
  { time: "18:00", value: 1.2 },
  { time: "21:00", value: 0.46 },
]

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 container max-w-md mx-auto p-4 pb-24">
        {/* Header */}
        <div className="relative mb-6 bg-gradient-to-br from-blue-600 to-blue-400 rounded-3xl p-6 text-white">
          <div className="relative z-10">
            <h1 className="text-2xl font-medium mb-1">Folke Bernadottes Road 38</h1>
            <p className="text-sm opacity-90">PowerSmart</p>

            <div className="grid grid-cols-2 gap-8 mt-6">
              <div>
                <p className="text-sm opacity-90">Current spot price</p>
                <p className="text-3xl font-bold">0.43 kr</p>
                <p className="text-sm opacity-90">per kWh</p>
              </div>
              <div>
                <p className="text-sm opacity-90">Usage in April</p>
                <p className="text-3xl font-bold">706 kr</p>
                <p className="text-sm opacity-90">3.9 kWh daily average</p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-48 h-32 opacity-20">
            <img src="/placeholder.svg?height=128&width=192" alt="" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Price Graph */}
        <Card className="mb-6 bg-white/50 backdrop-blur border-none">
          <CardContent className="p-4">
            <div className="mb-4">
              <h3 className="font-medium">Today's Power Price</h3>
              <p className="text-sm text-muted-foreground">Spot price per hour</p>
            </div>
            <div className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563EB" stopOpacity={0.1} />
                      <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="time" tick={{ fontSize: 12 }} stroke="#6B7280" />
                  <YAxis tick={{ fontSize: 12 }} stroke="#6B7280" tickFormatter={(value) => `${value} kr`} />
                  <Area type="stepAfter" dataKey="value" stroke="#2563EB" strokeWidth={2} fill="url(#colorValue)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="bg-white/50 backdrop-blur border-none">
            <CardContent className="p-4">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Battery className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-medium">EV Charging</h3>
                <p className="text-sm text-muted-foreground">Smart charging active</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/50 backdrop-blur border-none">
            <CardContent className="p-4">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Plus className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-medium">Add Device</h3>
                <p className="text-sm text-muted-foreground">Connect new device</p>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Analysis Card */}
        <Card className="bg-white/50 backdrop-blur border-none">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-medium">Analysis</h3>
                <p className="text-sm text-muted-foreground">Saved 45 kr so far</p>
              </div>
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                View details
              </Button>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Smart charging active</span>
                <span className="text-sm font-medium text-green-600">32 kr saved</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Water heating optimized</span>
                <span className="text-sm font-medium text-green-600">13 kr saved</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}

