import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/Layout/Header";
import { Sidebar } from "@/components/Layout/Sidebar";
import { SidebarProvider } from "@/contexts/sidebarContext";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Main } from "@/components/Layout/Main";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex h-screen overflow-hidden">
          <Header />
          <SidebarProvider>
            <Sidebar />
            <Main>{children}</Main>
          </SidebarProvider>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
