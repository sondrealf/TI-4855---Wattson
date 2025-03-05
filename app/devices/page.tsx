"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Car, Droplet, Flame, PencilIcon } from "lucide-react"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function DevicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 container max-w-md mx-auto p-4 pb-24">
        <Header title="Devices" subtitle="Manage your connected devices" />

        <div className="space-y-4 mb-6">
          <h2 className="text-xl font-semibold">Your Devices</h2>

          <Card className="rounded-xl overflow-hidden border-none shadow-sm">
            <div className="flex items-center p-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <Car className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">EV Charger</h3>
                <p className="text-sm text-muted-foreground">Tesla Model 3</p>
              </div>
              <Button variant="ghost" size="sm" className="rounded-full">
                <PencilIcon className="h-4 w-4" />
              </Button>
            </div>
            <div className="px-4 pb-4 pt-1">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Status:</span>
                <span className="text-sm text-blue-600">Connected</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Last charged:</span>
                <span className="text-sm">Today, 08:30</span>
              </div>
            </div>
          </Card>

          <Card className="rounded-xl overflow-hidden border-none shadow-sm">
            <div className="flex items-center p-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                <Droplet className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">Water Heater</h3>
                <p className="text-sm text-muted-foreground">OSO Super S 200</p>
              </div>
              <Button variant="ghost" size="sm" className="rounded-full">
                <PencilIcon className="h-4 w-4" />
              </Button>
            </div>
            <div className="px-4 pb-4 pt-1">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Status:</span>
                <span className="text-sm text-green-600">Active</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Temperature:</span>
                <span className="text-sm">65°C</span>
              </div>
            </div>
          </Card>

          <Card className="rounded-xl overflow-hidden border-none shadow-sm">
            <div className="flex items-center p-4">
              <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mr-4">
                <Flame className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">Heating</h3>
                <p className="text-sm text-muted-foreground">Panel heater - Living room</p>
              </div>
              <Button variant="ghost" size="sm" className="rounded-full">
                <PencilIcon className="h-4 w-4" />
              </Button>
            </div>
            <div className="px-4 pb-4 pt-1">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Status:</span>
                <span className="text-sm text-green-600">On</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Target temperature:</span>
                <span className="text-sm">21°C</span>
              </div>
            </div>
          </Card>
        </div>

        <Button className="w-full bg-green-600 hover:bg-green-700">Add new device</Button>
      </main>

      <Footer />
    </div>
  )
}

