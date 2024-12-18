"use client";

import { NavTabs } from "./nav-tabs";
import { PeriodSelect } from "./period-select";

export function DashboardHeader() {
  return (
    <div className="flex justify-between items-center mb-8">
      <NavTabs />
      <PeriodSelect />
    </div>
  );
}