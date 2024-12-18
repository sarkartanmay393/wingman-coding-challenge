import { type ChartData } from "@/types/charts";

export function formatChartData<T extends Record<string, any>>(
  data: T[],
  categories: (keyof T)[]
): ChartData[] {
  return data.map((item) => ({
    name: item.name,
    ...categories.reduce((acc, category) => ({
      ...acc,
      [category]: item[category]
    }), {})
  }));
}