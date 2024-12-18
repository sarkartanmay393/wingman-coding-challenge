"use client";

import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ExternalLinkIcon } from "lucide-react";

const orders = [
  {
    id: 1,
    product: "Product Name 1",
    date: "24 Apr '2024",
    time: "10:24 AM",
    timeSpent: "2h 5m",
    orderValue: "$120.21",
    commission: "$55"
  },
  {
    id: 2,
    product: "Product Name 2",
    date: "24 Apr '2024",
    time: "10:24 AM",
    timeSpent: "2h 5m",
    orderValue: "$120.21",
    commission: "$55"
  },
  {
    id: 3,
    product: "Product Name 3",
    date: "24 Apr '2024",
    time: "10:24 AM",
    timeSpent: "2h 5m",
    orderValue: "$120.21",
    commission: "$55"
  },
  {
    id: 4,
    product: "Product Name 4",
    date: "24 Apr '2024",
    time: "10:24 AM",
    timeSpent: "2h 5m",
    orderValue: "$120.21",
    commission: "$55"
  }
];

export function DashboardOrders() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Orders</h2>
      <Card>
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
              <TableRow key={order.id}>
                <TableCell>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                    {order.product}
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <div>{order.date}</div>
                    <div className="text-sm text-gray-500">{order.time}</div>
                  </div>
                </TableCell>
                <TableCell>{order.timeSpent}</TableCell>
                <TableCell>{order.orderValue}</TableCell>
                <TableCell>{order.commission}</TableCell>
                <TableCell>
                  <button className="text-blue-500 hover:text-blue-700 flex items-center">
                    View Chat
                    <ExternalLinkIcon className="w-4 h-4 ml-1" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}