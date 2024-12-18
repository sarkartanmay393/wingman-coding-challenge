"use client";

import { StatCard } from "./stat-card";
import { stats } from "./data";

export function DashboardStats() {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">At a glance</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <StatCard key={index} stat={stat} />
        ))}
      </div>
    </div>
  );
}