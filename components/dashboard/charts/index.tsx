"use client";

import { ConsultationsChart } from "./line-chart";
import { ComparisonChart } from "./comparison-chart";
import { ForecastCard } from "./forecast-card";

export function DashboardCharts() {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Insights</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <ConsultationsChart />
        <div className="space-y-4">
          <ComparisonChart />
          <ForecastCard />
        </div>
      </div>
    </div>
  );
}