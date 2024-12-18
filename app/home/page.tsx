"use client";

import StatsGrid from "@/components/StatsGrid";
import InsightsSection from "@/components/InsightsSection";
import Orders from "@/components/Orders";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ArrowDown } from "lucide-react";

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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="sm" className="w-min md:px-4 md:py-2 space-x-2 bg-white rounded-lg text-sm text-gray-600 border border-gray-200">
              <p>7 Days</p>
              <ArrowDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white">
            <DropdownMenuItem onSelect={() => console.log("7 Days selected")}>
              7 Days
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
