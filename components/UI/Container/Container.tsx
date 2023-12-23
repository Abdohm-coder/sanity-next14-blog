import { cn } from "@/lib/utils";
import React from "react";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(["max-w-[1080px] mx-auto lg:px-12 px-8", className])}>
      {children}
    </div>
  );
};
