import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { Footer } from "@/components/footer"

const data = [
  { date: "Mon", home: 173, smart: 32 },
  { date: "Tue", home: 165, smart: 28 },
  { date: "Wed", home: 180, smart: 35 },
  { date: "Thu", home: 158, smart: 30 },
  { date: "Fri", home: 170, smart: 33 },
  { date: "Sat", home: 145, smart: 25 },
  { date: "Sun", home: 140, smart: 22 },
]

export default function HistoryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      <main className="flex-1 container max-w-md mx-auto p-4 pb-24">
        {/* Header */}
        <div className="relative mb-6 bg-gradient-to-br from-blue-600 to-blue-400 rounded-3xl p-6 text-white">
          <div className="relative z-10">
            <h1 className="text-2xl font-medium mb-1">Charging History</h1>
            <div className="grid grid-cols-2 gap-8 mt-4">
              <div>
                <p className="text-sm opacity-90">Charged at home</p>
                <p className="text-3xl font-bold">173 kr</p>
              </div>
              <div>
                <p className="text-sm opacity-90">Saved with smart charging</p>
                <p className="text-3xl font-bold">32 kr</p>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="day" className="mb-6">
          <TabsList className="w-full bg-white/50 p-1">
            <TabsTrigger value="day" className="flex-1 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Day
            </TabsTrigger>
            <TabsTrigger value="week" className="flex-1 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Week
            </TabsTrigger>
            <TabsTrigger
              value="month"
              className="flex-1 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              Month
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <Card className="bg-white/50 backdrop-blur border-none mb-6">
          <CardContent className="p-4">
            <div className="mb-4">
              <h3 className="font-medium">Usage this week</h3>
              <p className="text-sm text-muted-foreground">Cost per day</p>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="date" />
                  <YAxis tickFormatter={(value) => `${value}kr`} />
                  <Bar dataKey="home" fill="#2563EB" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="smart" fill="#22C55E" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-600" />
                <span className="text-sm">Charged at home</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-600" />
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
                <span className="text-sm">Total savings this week</span>
                <span className="font-medium text-green-600">205 kr</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Most efficient day</span>
                <span className="font-medium">Wednesday (35 kr saved)</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}

