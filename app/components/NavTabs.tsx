"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

interface TabItem {
  label: string;
  value: string;
}

interface NavTabsProps {
  tabs: TabItem[];
}

export default function NavTabs(props: NavTabsProps) {
  const { tabs } = props;
  const router = useRouter();
  const pathname = usePathname();

  // Match current route to tab value
  const currentTab =
    tabs.find((tab: TabItem) => pathname === tab.value)?.value ?? "/home";

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    router.push(newValue);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
      <Tabs value={currentTab} onChange={handleChange}>
        {tabs.map((tab) => (
          <Tab key={tab.value} label={tab.label} value={tab.value} />
        ))}
      </Tabs>
    </Box>
  );
}
