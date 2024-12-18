"use client";

import { Card } from "@/components/ui/card";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";
import { type Stat } from "./types";

interface StatCardProps {
  stat: Stat;
}

export function StatCard({ stat }: StatCardProps) {
  return (
    <Card className="p-4">
      <p className="text-sm text-gray-500 mb-2">{stat.title}</p>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-semibold">{stat.value}</span>
        <div className={`flex items-center ${stat.increase ? 'text-green-500' : 'text-red-500'}`}>
          {stat.increase ? <ArrowUpIcon className="w-4 h-4" /> : <ArrowDownIcon className="w-4 h-4" />}
          <span className="text-sm ml-1">{stat.change}% {stat.increase ? 'increase' : 'decrease'}</span>
        </div>
      </div>
    </Card>
  );
}