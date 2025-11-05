import React from "react";
import NavTabs from "./NavTabs";

const HomePageTabs = () => {
  const tabs = [
    { label: "Home", value: "/home" },
    { label: "Profile", value: "/profile" },
    { label: "Settings", value: "/settings" },
  ];
  return (
    <div>
      <NavTabs tabs={tabs} />
    </div>
  );
};

export default HomePageTabs;
