import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Service Studio",
  description: "AI-powered customer service management platform",
};

/**
 * Root layout component that provides the main application shell
 * Includes fixed sidebar navigation and main content area
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <div className="flex h-screen">
          {/* Fixed Sidebar */}
          <Sidebar />

          {/* Main Content Area */}
          <main className="ml-60 flex-1 overflow-auto bg-white">
            <div className="p-6">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
