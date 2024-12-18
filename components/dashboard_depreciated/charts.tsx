"use client";

import { Card } from "@/components/ui/card";
import { Line, Bar } from "recharts";
import { LineChart } from "@/components/ui/chart";
import { ArrowUpIcon } from 'lucide-react';

const data = [
  { name: "Mon", incoming: 30, answered: 25, experts: 20 },
  { name: "Tue", incoming: 35, answered: 28, experts: 22 },
  { name: "Wed", incoming: 40, answered: 32, experts: 25 },
  { name: "Thu", incoming: 45, answered: 35, experts: 28 },
  { name: "Fri", incoming: 42, answered: 33, experts: 26 },
  { name: "Sat", incoming: 38, answered: 30, experts: 24 },
  { name: "Sun", incoming: 35, answered: 28, experts: 22 }
];

const comparisonData = [
  { name: "This week", consultations: 20, orders: 15 },
  { name: "Last week", consultations: 15, orders: 12 }
];

export function DashboardCharts() {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Insights</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="col-span-2 p-4">
          <div className="h-[300px]">
            <LineChart
              data={data}
              index="name"
              categories={["incoming", "answered", "experts"]}
              colors={["blue", "green", "yellow"]}
              yAxisWidth={40}
              className="h-[300px]"
            />
          </div>
        </Card>
        
        <Card className="p-4 bg-[#00B69B] text-white">
          <h3 className="text-sm mb-4">FORECASTS</h3>
          <div className="space-y-6">
            <div>
              <div className="flex items-center">
                <span className="text-4xl font-bold">+15%</span>
                <ArrowUpIcon className="w-6 h-6 ml-2" />
              </div>
              <p className="text-sm mt-2">
                forecasted increase in your sales closed by the end of the current month
              </p>
            </div>
            <div>
              <div className="flex items-center">
                <span className="text-4xl font-bold">+20%</span>
                <ArrowUpIcon className="w-6 h-6 ml-2" />
              </div>
              <p className="text-sm mt-2">
                forecasted increase in consultations by the end of the current month
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}