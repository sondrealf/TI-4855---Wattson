import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Coins, Leaf } from "lucide-react"
import Link from "next/link"

export default function GoalsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 p-4">
      <div className="container max-w-md mx-auto space-y-6">
        <div className="text-center space-y-2 mb-8">
          <h1 className="text-2xl font-bold">Velg ditt hovedmål</h1>
          <p className="text-muted-foreground">Hva er viktigst for deg?</p>
        </div>

        <div className="space-y-4">
          <Card className="relative hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <label className="flex flex-col items-center space-y-4 cursor-pointer text-center">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
                  <Coins className="w-10 h-10 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Økonomi</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Fokuser på å spare penger ved å optimalisere strømforbruket ditt
                  </p>
                </div>
                <input type="radio" name="goal" value="economy" className="h-5 w-5" />
              </label>
            </CardContent>
          </Card>

          <Card className="relative hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <label className="flex flex-col items-center space-y-4 cursor-pointer text-center">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                  <Leaf className="w-10 h-10 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Miljø</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Fokuser på å redusere ditt CO₂-avtrykk og bidra til et grønnere miljø
                  </p>
                </div>
                <input type="radio" name="goal" value="environment" className="h-5 w-5" />
              </label>
            </CardContent>
          </Card>
        </div>

        <div className="h-16" />

        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t">
          <div className="container max-w-md mx-auto flex justify-between gap-4">
            <Button variant="outline" className="w-full" asChild>
              <Link href="/setup">Tilbake</Link>
            </Button>
            <Button className="w-full" asChild>
              <Link href="/">Start</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

