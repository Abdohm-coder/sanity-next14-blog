"use client";
import Link from "next/link";
import React from "react";

export const LinkClient = ({
  children,
  route,
  className,
}: {
  children: React.ReactNode;
  route: string;
  className?: string;
}) => {
  return (
    <Link href={route} className={className}>
      {children}
    </Link>
  );
};
