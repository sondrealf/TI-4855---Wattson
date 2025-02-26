import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Car, Droplet, Flame } from "lucide-react"
import Link from "next/link"

export default function SetupPage() {
  return (
    <div className="min-h-screen bg-zinc-50 p-4">
      <div className="container max-w-md mx-auto space-y-6">
        <div className="text-center space-y-2 mb-8">
          <h1 className="text-2xl font-bold">Velg dine enheter</h1>
          <p className="text-muted-foreground">Velg hvilke enheter du ønsker å integrere for smart energistyring</p>
        </div>

        <div className="space-y-4">
          <Card className="relative">
            <CardContent className="p-6">
              <label className="flex items-center space-x-4 cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Car className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">Elbil-lader</h3>
                  <p className="text-sm text-muted-foreground">Optimaliser lading basert på strømpriser</p>
                </div>
                <input type="checkbox" className="h-5 w-5" />
              </label>
            </CardContent>
          </Card>

          <Card className="relative">
            <CardContent className="p-6">
              <label className="flex items-center space-x-4 cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Droplet className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">Varmtvannstank</h3>
                  <p className="text-sm text-muted-foreground">Smart oppvarming av vann</p>
                </div>
                <input type="checkbox" className="h-5 w-5" />
              </label>
            </CardContent>
          </Card>

          <Card className="relative">
            <CardContent className="p-6">
              <label className="flex items-center space-x-4 cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                  <Flame className="w-6 h-6 text-yellow-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">Oppvarming</h3>
                  <p className="text-sm text-muted-foreground">Automatisk temperaturkontroll</p>
                </div>
                <input type="checkbox" className="h-5 w-5" />
              </label>
            </CardContent>
          </Card>
        </div>

        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t">
          <div className="container max-w-md mx-auto flex justify-between gap-4">
            <Button variant="outline" className="w-full">
              Tilbake
            </Button>
            <Button className="w-full" asChild>
              <Link href="/goals">Neste</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

