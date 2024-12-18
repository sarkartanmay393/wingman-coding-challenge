"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function NavTabs() {
  return (
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
  );
}