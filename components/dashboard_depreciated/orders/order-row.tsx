"use client";

import { TableCell, TableRow } from "@/components/ui/table";
import { ExternalLinkIcon } from "lucide-react";
import { type Order } from "./types";

interface OrderRowProps {
  order: Order;
}

export function OrderRow({ order }: OrderRowProps) {
  return (
    <TableRow>
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
  );
}