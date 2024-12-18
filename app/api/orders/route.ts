import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
  // const url = new URL(request.url);
  // const search = url.searchParams.get("search") || "";

  // console.log('url', search)

  // const filteredOrders = orders.filter((order) =>
  //   order.product.name.toLowerCase().includes(search.toLowerCase())
  // );

  return NextResponse.json(orders);
}

const orders = [
  {
    id: 1,
    product: {
      name: "Wireless Headphones",
      image: "https://picsum.photos/200",
    },
    date: "24 Apr 2024",
    time: "10:24 AM",
    timeSpent: "2h 5m",
    orderValue: "$120.21",
    commission: "$55",
  },
  {
    id: 2,
    product: {
      name: "Smart Watch",
      image: "https://picsum.photos/201",
    },
    date: "25 Apr 2024",
    time: "11:30 AM",
    timeSpent: "1h 45m",
    orderValue: "$250.00",
    commission: "$75",
  },
  {
    id: 3,
    product: {
      name: "Bluetooth Speaker",
      image: "https://picsum.photos/202",
    },
    date: "26 Apr 2024",
    time: "02:15 PM",
    timeSpent: "3h 10m",
    orderValue: "$89.99",
    commission: "$30",
  },
  {
    id: 4,
    product: {
      name: "Laptop Stand",
      image: "https://picsum.photos/203",
    },
    date: "27 Apr 2024",
    time: "09:00 AM",
    timeSpent: "4h 20m",
    orderValue: "$45.50",
    commission: "$20",
  },
  {
    id: 5,
    product: {
      name: "USB-C Hub",
      image: "https://picsum.photos/204",
    },
    date: "28 Apr 2024",
    time: "03:45 PM",
    timeSpent: "2h 30m",
    orderValue: "$35.75",
    commission: "$15",
  },
];