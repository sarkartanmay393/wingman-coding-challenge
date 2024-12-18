"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function DashboardHeader() {
  return (
    <div className="flex justify-between items-center mb-8">
      <Tabs defaultValue="summary" className="w-auto">
        <TabsList className="bg-white">
          <TabsTrigger value="summary" className="data-[state=active]:bg-[#F1F5F9]">
            Summary
          </TabsTrigger>
          <TabsTrigger value="sales" className="data-[state=active]:bg-[#F1F5F9]">
            Sales
          </TabsTrigger>
          <TabsTrigger value="chats" className="data-[state=active]:bg-[#F1F5F9]">
            Chats
          </TabsTrigger>
        </TabsList>
      </Tabs>
      
      <select className="bg-white border rounded-md px-4 py-2 text-sm">
        <option>7 days</option>
        <option>30 days</option>
        <option>90 days</option>
      </select>
    </div>
  );
}