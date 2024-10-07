"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Define the types for the context
interface SidebarContextType {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

// Create the context with default values
export const SidebarContext = createContext<SidebarContextType | undefined>(
  undefined
);

// Create a provider component with typed props
interface SidebarProviderProps {
  children: ReactNode;
}

export function SidebarProvider({ children }: SidebarProviderProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  // Toggle function
  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}

// Custom hook to use the SidebarContext with proper typing
export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}
