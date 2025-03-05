"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Line, ComposedChart, Tooltip } from "recharts"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Generate data for 31 days
const generateMonthData = () => {
  const result = []
  for (let i = 1; i <= 31; i++) {
    result.push({
      date: i.toString(),
      home: Math.floor(Math.random() * 20) + 55, // Random value between 55-75
      smart: Math.floor(Math.random() * 20) + 10, // Random value between 20-40
    })
  }
  return result
}

const monthData = generateMonthData()

export default function HistoryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 container max-w-md mx-auto p-4 pb-24">
        {/* Header */}
        <Header title="Charging History" />

        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="bg-white/50 backdrop-blur border-none">
            <CardContent className="p-4 text-center">
              <p className="text-sm text-muted-foreground">Charged at home</p>
              <p className="text-3xl font-bold">173 kr</p>
            </CardContent>
          </Card>

          <Card className="bg-white/50 backdrop-blur border-none">
            <CardContent className="p-4 text-center">
              <p className="text-sm text-muted-foreground">Saved with smart charging</p>
              <p className="text-3xl font-bold text-green-600">32 kr</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="month" className="mb-4">
          <TabsList className="w-full bg-white/50 p-1">
            <TabsTrigger
              value="month"
              className="flex-1 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              Last 30 days
            </TabsTrigger>
            <TabsTrigger value="week" className="flex-1 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Week
            </TabsTrigger>
            <TabsTrigger value="day" className="flex-1 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Day
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Month Selector */}
        <div className="flex items-center justify-between mb-4 bg-white/50 rounded-lg p-3">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="text-center">
            <h3 className="font-medium">April 2023</h3>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Device Selector - Smaller and Thinner */}
        <div className="flex mb-4 bg-white/50 rounded-lg overflow-hidden text-xs">
          <button className="flex-1 py-1.5 px-1 bg-blue-400 text-white font-medium">All devices</button>
          <button className="flex-1 py-1.5 px-1 hover:bg-blue-50">EV car</button>
          <button className="flex-1 py-1.5 px-1 hover:bg-blue-50">Heating</button>
          <button className="flex-1 py-1.5 px-1 hover:bg-blue-50">Water tank</button>
        </div>

        <Card className="bg-white/50 backdrop-blur border-none mb-6">
          <CardContent className="p-4">
            <div className="mb-4">
              <h3 className="font-medium">Usage last 30 days</h3>
              <p className="text-sm text-muted-foreground">All devices</p>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={monthData} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="date" />
                  <YAxis tickFormatter={(value) => `${value}kWh`} />
                  <Tooltip />
                  <Bar dataKey="home" fill="#2563EB" radius={[4, 4, 0, 0]} />
                  <Line
                    type="monotone"
                    dataKey="smart"
                    stroke="#ffa302"
                    strokeWidth={4}
                    dot={{ r: 0, fill: "#ffa302" }}
                    activeDot={{ r: 5 }}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-600" />
                <span className="text-sm">Charged at home</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ffa302]" />
                <span className="text-sm">Saved with smart charging</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/50 backdrop-blur border-none">
          <CardContent className="p-4">
            <h3 className="font-medium mb-4">Details</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Average daily cost</span>
                <span className="font-medium">161.57 kr</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Total savings this month</span>
                <span className="font-medium text-green-600">205 kr</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Most efficient day</span>
                <span className="font-medium">Day 15 (35 kr saved)</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}

