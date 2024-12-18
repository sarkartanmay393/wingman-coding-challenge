"use client";

import { Card } from "@/components/ui/card";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

const stats = [
  {
    title: "CONSULTATIONS",
    value: "24",
    change: 15,
    increase: true
  },
  {
    title: "ORDERS PLACED",
    value: "12",
    change: 15,
    increase: false
  },
  {
    title: "CONVERSION",
    value: "50%",
    change: 15,
    increase: false
  },
  {
    title: "TOTAL SALES VALUE",
    value: "$2,400",
    change: 15,
    increase: true
  },
  {
    title: "AVG ORDER VALUE",
    value: "$240",
    change: 15,
    increase: true
  },
  {
    title: "COMMISSION PAID",
    value: "$240",
    change: 15,
    increase: true
  }
];

export function DashboardStats() {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">At a glance</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="p-4">
            <p className="text-sm text-gray-500 mb-2">{stat.title}</p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-semibold">{stat.value}</span>
              <div className={`flex items-center ${stat.increase ? 'text-green-500' : 'text-red-500'}`}>
                {stat.increase ? <ArrowUpIcon className="w-4 h-4" /> : <ArrowDownIcon className="w-4 h-4" />}
                <span className="text-sm ml-1">{stat.change}% {stat.increase ? 'increase' : 'decrease'}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}