"use client";

import { Card } from "@/components/ui/card";
import { BarChart } from "@/components/ui/chart/bar-chart";
import { CHART_SERIES } from "@/lib/constants/colors";
import { formatChartData } from "@/lib/utils/chart";

const data = [
  { name: "This week", consultations: 20, orders: 15 },
  { name: "Last week", consultations: 15, orders: 12 }
];

const categories = ["consultations", "orders"];
const colors = categories.map(cat => CHART_SERIES.comparison[cat as keyof typeof CHART_SERIES.comparison]);

export function ComparisonChart() {
  const chartData = formatChartData(data, categories);

  return (
    <Card className="p-4">
      <h3 className="text-sm text-gray-500 mb-4">VS PAST PERIOD</h3>
      <div className="h-[200px]">
        <BarChart
          data={chartData}
          categories={categories}
          colors={colors}
        />
      </div>
      <div className="flex gap-4 mt-4">
        {categories.map((category, index) => (
          <div key={category} className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: colors[index] }} 
            />
            <span className="text-sm capitalize">
              {category}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}