"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, DollarSign } from "lucide-react"
import Link from "next/link"

function NatureIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="20" fill="#22C55E" fillOpacity="0.1" />
      <path d="M20 8C16 8 10 12 10 20C10 28 15 32 20 32C25 32 30 28 30 20C30 12 24 8 20 8Z" fill="#22C55E" />
      <path d="M15 28C15 25 17 22 20 22C23 22 25 25 25 28" fill="#15803D" />
      <path d="M20 15L23 18H17L20 15Z" fill="#86EFAC" />
      <path d="M10 20C10 16 14 14 17 14" stroke="#86EFAC" strokeWidth="2" />
    </svg>
  )
}

export default function GoalsPage() {
  return (
    <div className="min-h-screen p-4">
      <div className="container max-w-md mx-auto space-y-6">
        <div className="text-center space-y-2 mb-8">
          <h1 className="text-2xl font-bold">Choose Your Main Goal</h1>
          <p className="text-muted-foreground">What matters most to you?</p>
        </div>

        <div className="space-y-4">
          <Card className="relative rounded-2xl hover:shadow-lg transition-shadow bg-green-100 border-green-100 bg-opacity-50 hover:border-green-200">
            <CardContent className="p-8">
              <label className="flex flex-col items-center space-y-4 cursor-pointer text-center">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
                  <DollarSign className="w-10 h-10 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Economy</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Focus on saving money by optimizing your power consumption
                  </p>
                </div>
                <input type="radio" name="goal" value="economy" className="h-5 w-5 accent-green-600" />
              </label>
            </CardContent>
          </Card>

          <Card className="relative rounded-2xl hover:shadow-lg transition-shadow bg-green-100 bg-opacity-50 border-green-100 hover:border-green-200">
            <CardContent className="p-8">
              <label className="flex flex-col items-center space-y-4 cursor-pointer text-center">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
                  <NatureIcon />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Environment</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Focus on reducing your CO₂ footprint and contributing to a greener environment
                  </p>
                </div>
                <input type="radio" name="goal" value="environment" className="h-5 w-5 accent-green-600" />
              </label>
            </CardContent>
          </Card>
        </div>

        <div className="pt-8 flex justify-between items-center">
          <div className="flex flex-col items-center">
            <Button size="icon" className="h-12 w-12 rounded-full mb-2 bg-green-600 hover:bg-green-700" asChild>
              <Link href="/setup">
                <ArrowLeft className="h-6 w-6" />
              </Link>
            </Button>
            <span className="text-sm text-muted-foreground">Back</span>
          </div>
          <div className="flex flex-col items-center">
            <Button asChild size="icon" className="h-12 w-12 rounded-full mb-2 bg-green-600 hover:bg-green-700">
              <Link href="/">
                <ArrowRight className="h-6 w-6" />
              </Link>
            </Button>
            <span className="text-sm">Start</span>
          </div>
        </div>
      </div>
    </div>
  )
}

