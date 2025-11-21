"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient: _showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col h-[100vh] items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-400 overflow-hidden",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated gradient orbs */}
          <div
            className="absolute -top-1/4 -left-1/4 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-blue-400/50 to-cyan-300/40 blur-3xl animate-aurora"
          ></div>
          <div
            className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-blue-500/30 to-purple-400/20 blur-3xl animate-aurora-reverse"
          ></div>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-gradient-to-r from-cyan-300/20 to-blue-400/20 blur-3xl animate-aurora-slow"
          ></div>
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-blue-300/35 to-indigo-400/25 blur-3xl animate-aurora"
          ></div>
          <div
            className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-cyan-400/30 to-blue-500/20 blur-3xl animate-aurora-reverse"
          ></div>
        </div>
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </main>
  );
};
