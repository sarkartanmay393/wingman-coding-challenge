"use client";

import { Card } from "@/components/ui/card";
import { OrderTable } from "./order-table";

export function DashboardOrders() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Orders</h2>
      <Card>
        <OrderTable />
      </Card>
    </div>
  );
}