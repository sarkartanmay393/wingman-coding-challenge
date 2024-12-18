"use client";

import { ResponsiveContainer, BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { type ChartProps } from "@/types/charts";

export function BarChart({ data, categories, colors, height = 200 }: ChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsBarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="name"
          style={{ fontSize: '12px' }}
        />
        <YAxis
          style={{ fontSize: '12px' }}
        />
        <Tooltip />
        {categories.map((category, index) => (
          <Bar
            key={category}
            dataKey={category}
            fill={colors[index]}
          />
        ))}
      </RechartsBarChart>
    </ResponsiveContainer>
  );
}