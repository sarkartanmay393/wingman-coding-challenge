"use client";

import { Card } from "@/components/ui/card";
import { LineChart } from "@/components/ui/chart/line-chart";
import { CHART_SERIES } from "@/lib/constants/colors";
import { formatChartData } from "@/lib/utils/chart";

const data = [
  { name: "Mon", incoming: 30, answered: 25, experts: 20 },
  { name: "Tue", incoming: 35, answered: 28, experts: 22 },
  { name: "Wed", incoming: 40, answered: 32, experts: 25 },
  { name: "Thu", incoming: 45, answered: 35, experts: 28 },
  { name: "Fri", incoming: 42, answered: 33, experts: 26 },
  { name: "Sat", incoming: 38, answered: 30, experts: 24 },
  { name: "Sun", incoming: 35, answered: 28, experts: 22 }
];

const categories = ["incoming", "answered", "experts"];
const colors = categories.map(cat => CHART_SERIES.consultations[cat as keyof typeof CHART_SERIES.consultations]);

export function ConsultationsChart() {
  const chartData = formatChartData(data, categories);

  return (
    <Card className="col-span-2 p-4">
      <div className="h-[300px]">
        <LineChart
          data={chartData}
          categories={categories}
          colors={colors}
        />
      </div>
    </Card>
  );
}