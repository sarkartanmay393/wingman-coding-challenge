"use client";

import StatsGrid from "@/components/StatsGrid";
import InsightsSection from "@/components/InsightsSection";
import Orders from "@/components/Orders";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";

export default function Dashboard() {
  const params = useSearchParams();

  switch (params.get("tab")) {
    case "summary":
      return <SummaryView />;
    case "sales":
      return <SalesView />;
    default:
      return <></>;
  }
}

function SummaryView() {
  return (
    <div className="space-y-8 mx-2 md:mx-8 my-2 md:my-4 py-8 px-6 border rounded-3xl bg-white">
      <div className="flex justify-between items-center gap-2">
        <h1 className="text-xl md:text-3xl ">At a glance</h1>
        <Select value="7d">
          <SelectTrigger
            value="7d"
            className="w-min md:px-4 md:py-2 bg-white rounded-lg text-sm text-gray-600 border border-gray-200 "
          >
            <Button size="sm">7 Days</Button>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7d">7 Days</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <StatsGrid />
      <InsightsSection />
      <Orders />
    </div>
  );
}

function SalesView() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 space-y-8">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Recent Orders</h2>
        <p className="text-sm text-gray-500 mt-1">
          Monitor and manage your recent orders
        </p>
      </div>
      <Orders />
    </div>
  );
}
