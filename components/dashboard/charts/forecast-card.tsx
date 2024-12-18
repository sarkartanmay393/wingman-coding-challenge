"use client";

import { Card } from "@/components/ui/card";
import { ArrowUpIcon } from "lucide-react";

interface ForecastItem {
  value: string;
  description: string;
}

const forecasts: ForecastItem[] = [
  {
    value: "+15%",
    description: "forecasted increase in your sales closed by the end of the current month"
  },
  {
    value: "+20%",
    description: "forecasted increase in consultations by the end of the current month"
  }
];

export function ForecastCard() {
  return (
    <Card className="p-4 bg-[#00B69B] text-white">
      <h3 className="text-sm mb-4">FORECASTS</h3>
      <div className="space-y-6">
        {forecasts.map((forecast, index) => (
          <div key={index}>
            <div className="flex items-center">
              <span className="text-4xl font-bold">{forecast.value}</span>
              <ArrowUpIcon className="w-6 h-6 ml-2" />
            </div>
            <p className="text-sm mt-2">{forecast.description}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}