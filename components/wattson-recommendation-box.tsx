"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BrainCircuit, Check, X } from "lucide-react"
import { useState } from "react"

interface WattsonRecommendationProps {
  recommendationsCount: number
}

export function WattsonRecommendationBox({ recommendationsCount }: WattsonRecommendationProps) {
  const [showRecommendation, setShowRecommendation] = useState(false)

  return (
    <>
      <Card
        className="bg-white/50 backdrop-blur border-none cursor-pointer hover:shadow-md transition-shadow"
        onClick={() => setShowRecommendation(true)}
      >
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <BrainCircuit className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium">Wattson's Recommendations</h3>
              <p className="text-sm text-muted-foreground">Smart energy saving tips</p>
            </div>
            {recommendationsCount > 0 && (
              <div className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-xs font-bold">
                {recommendationsCount}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {showRecommendation && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowRecommendation(false)}
        >
          <div className="bg-blue-300 rounded-xl max-w-md w-full p-6 relative" onClick={(e) => e.stopPropagation()}>
            <div className="flex">
              {/* Stick figure from SVG file */}
              <div className="w-1/3 flex items-center justify-center">
                <img
                  src="/svg/stickfigure.svg"
                  alt="Wattson"
                  className="h-[200px] w-auto transform scale-100 -translate-x-4"
                  onError={(e) => {
                    console.error("Error loading SVG")
                    e.currentTarget.style.border = "1px solid red"
                    e.currentTarget.style.width = "100px"
                    e.currentTarget.style.height = "100px"
                    e.currentTarget.style.background = "#ffcccc"
                  }}
                />
              </div>

              {/* Recommendation box */}
              <div className="w-2/3">
                <div className="bg-green-200 rounded-lg p-4 border-2 border-green-600 transform rotate-1 shadow-md">
                  <h3 className="font-bold text-lg">Wattson recommends:</h3>
                  <h4 className="font-semibold">Hot water tank</h4>
                  <p className="text-sm mt-2">
                    The hot water tank is heated to 72° during low-cost hours, to avoid power consumption during high-cost periods.
                  </p>
                  <p className="text-sm mt-2">Temperature between 72°-60°</p>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex justify-center gap-8 mt-8">
              <button
                className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-lg flex items-center justify-center"
                onClick={() => setShowRecommendation(false)}
              >
                <Check className="w-8 h-8 text-white" />
              </button>
              <button
                className="w-16 h-16 bg-red-500 hover:bg-red-600 rounded-lg flex items-center justify-center"
                onClick={() => setShowRecommendation(false)}
              >
                <X className="w-8 h-8 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

