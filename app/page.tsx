"use client";

import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardStats } from "@/components/dashboard/stats";
import { DashboardCharts } from "@/components/dashboard/charts";
import { DashboardOrders } from "@/components/dashboard/orders";
import Sidebar from "@/components/sidebar";

// NOTE for Dibyendu

// please do pixel-perfect
// including good architecture of UI

// here only dashboard are is scrollable
// use exact same text-size, image-size, padding, margin, border-radius and everything else.
// the whole UI must be interactive, interactive doesn't mean fancy animations. Just maybe hovering on a number scales it up by 0.2
// Insight are must be highly interactive

// Please have dummy data on table and use any table library you want. But I have already installed most of the necessary things.
// One important point is Sorting on Table columns. Table library should contain a field to apply sorting on that table. Implement that.
// Order table is scrollable both direction (x and y). X scroll maybe needed for mobile screens.

// At a glance section:
// Can show the percentage and numbers on the card rolling from 0 to that on first render.
// Upon changing the day selector (7days, 30days), it should update the dummy data (optional).

// Most Important:
// 1. Pixel Perfect
// 2. Use tailwind constants (e.g. text-sm, text-xl, bg-red-300) - I will tell more on call about this
// 3. Code structure (Not rewriting same code, if one component is being used in 3 places then we should have a reusable component for that)
// 4. UI must be fast, no gitter while scrolling 🚀

// Sidebar has three items. No functiontionality needed, but it should have a hover effect or something.
// Final UI expectations: Production-ready UI without all the functionalites.


export default function Home() {
  return (
    <main className="relative min-h-screen w-screen flex overflow-hidden">
      <Sidebar />
      <div className="ml-[60px] container mx-auto py-6 px-4 max-w-[1400px] overflow-auto">
        <DashboardHeader />
        <DashboardStats />
        <DashboardCharts />
        <DashboardOrders />
      </div>
    </main>
  );
}