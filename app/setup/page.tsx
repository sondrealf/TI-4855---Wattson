"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Car, Droplet, Flame, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function SetupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="container max-w-md mx-auto space-y-6">
        <div className="text-center space-y-2 mb-8">
          <h1 className="text-2xl font-bold">Choose Your Devices</h1>
          <p className="text-muted-foreground">
            Select which devices you want to integrate for smart energy management
          </p>
        </div>

        <div className="space-y-4">
          {[
            { icon: Car, title: "EV Charger", desc: "Optimize charging based on electricity prices" },
            { icon: Droplet, title: "Water Heater", desc: "Smart water heating control" },
            { icon: Flame, title: "Heating", desc: "Automatic temperature control" },
          ].map((device, i) => (
            <Card
              key={i}
              className="relative rounded-2xl hover:shadow-lg transition-shadow border-green-100 hover:border-green-200"
            >
              <CardContent className="p-6">
                <label className="flex items-center space-x-4 cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
                    <device.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{device.title}</h3>
                    <p className="text-sm text-muted-foreground">{device.desc}</p>
                  </div>
                  <div className="relative">
                    <input type="checkbox" className="h-5 w-5 accent-green-600" />
                  </div>
                </label>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="pt-8 flex justify-between items-center">
          <div className="flex flex-col items-center">
            <Button variant="outline" size="icon" className="h-12 w-12 rounded-full mb-2">
              <ArrowLeft className="h-6 w-6" />
            </Button>
            <span className="text-sm text-muted-foreground">Back</span>
          </div>
          <div className="flex flex-col items-center">
            <Button asChild size="icon" className="h-12 w-12 rounded-full mb-2 bg-green-600 hover:bg-green-700">
              <Link href="/goals">
                <ArrowRight className="h-6 w-6" />
              </Link>
            </Button>
            <span className="text-sm">Next</span>
          </div>
        </div>
      </div>
    </div>
  )
}

