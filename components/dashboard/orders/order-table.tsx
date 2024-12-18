"use client";

import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { OrderRow } from "./order-row";
import { orders } from "./data";

export function OrderTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Time spent</TableHead>
          <TableHead>Order Value</TableHead>
          <TableHead>Commission</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <OrderRow key={order.id} order={order} />
        ))}
      </TableBody>
    </Table>
  );
}