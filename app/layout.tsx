import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ChatProvider } from "@/context/ChatContext";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wingman Demo",
  description: "Whatever wingman asks!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#f8f9fa] max-w-screen`}>
        <ChatProvider>
          <div className="flex min-h-screen overflow-hidden">
            <Sidebar />
            <main className="flex-1 ml-[60px] mt-[48px] md:mt-[96px] overflow-auto bg-white">
              <TopBar />
              {children}
            </main>
          </div>
        </ChatProvider>
      </body>
    </html>
  );
}
