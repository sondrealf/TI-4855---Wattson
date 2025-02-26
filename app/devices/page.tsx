import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Car, Droplet, Flame } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Footer } from "@/components/footer"

export default function DevicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      <main className="flex-1 container max-w-md mx-auto p-4 pb-24">
        {/* Header */}
        <div className="relative mb-6 bg-gradient-to-br from-blue-600 to-blue-400 rounded-3xl p-6 text-white">
          <div className="relative z-10">
            <h1 className="text-2xl font-medium mb-1">Smart Charging</h1>
            <p className="text-sm opacity-90 mb-4">Tesla Model S</p>

            <div className="bg-white/10 rounded-xl p-4 backdrop-blur">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="font-medium">Currently charging 7.4 kW</p>
                  <p className="text-sm opacity-90">Approx. 2h 30m remaining</p>
                </div>
                <p className="text-3xl font-bold">
                  112<span className="text-lg font-normal">km</span>
                </p>
              </div>
              <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-white rounded-full" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-48 h-32 opacity-20">
            <img src="/placeholder.svg?height=128&width=192" alt="" className="w-full h-full object-contain" />
          </div>
        </div>

        <Card className="mb-4 bg-white/50 backdrop-blur border-none">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Car className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium">Smart Charging</h3>
                  <p className="text-sm text-muted-foreground">Charge when prices are lowest</p>
                </div>
              </div>
              <Switch />
            </div>
            <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
              <span className="text-sm">Charging should complete by</span>
              <Button variant="ghost" className="text-green-600">
                07:00 →
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-white/50 backdrop-blur border-none">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Droplet className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium">Water Heater</h3>
                  <p className="text-sm text-muted-foreground">Smart water heating</p>
                </div>
              </div>
              <Switch />
            </div>
            <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
              <span className="text-sm">Target temperature</span>
              <Button variant="ghost" className="text-green-600">
                65°C →
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/50 backdrop-blur border-none">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Flame className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium">Heating</h3>
                  <p className="text-sm text-muted-foreground">Automatic temperature control</p>
                </div>
              </div>
              <Switch />
            </div>
            <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
              <span className="text-sm">Target temperature</span>
              <Button variant="ghost" className="text-green-600">
                21°C →
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}

