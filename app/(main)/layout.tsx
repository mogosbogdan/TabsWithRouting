"use client";
import React from "react";
import HomePageTabs from "../components/HomePageTabs";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HomePageTabs />
      {children}
    </>
  );
}

