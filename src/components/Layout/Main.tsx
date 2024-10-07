"use client";

import { useSidebar } from "@/contexts/sidebarContext";
import { ReactNode } from "react";

interface Props {
  children: Readonly<ReactNode>;
}

export function Main({ children }: Props) {
  const { isSidebarOpen } = useSidebar();
  return (
    <main
      className={`flex-1 overflow-x-hidden overflow-y-auto pt-12 ${
        isSidebarOpen ? "pl-80" : "pl-16"
      } transition-all duration-300`}
    >
      {children}
    </main>
  );
}
