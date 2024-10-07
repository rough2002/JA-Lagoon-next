"use client";

import React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SliderModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export function SliderModal({
  isOpen,
  onClose,
  children,
  title = "Modal",
}: SliderModalProps) {
  return (
    <>
      {/* Background Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-lg bg-white shadow-lg transform z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
      >
        <div className="p-4 flex flex-col items-center">
          <div className="flex w-full justify-between mb-8">
            <h2 className="text-2xl font-medium text-teal-800">{title}</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Modal Body */}
          <div className="overflow-y-auto max-h-[calc(100vh-5rem)]">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
