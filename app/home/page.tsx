"use client";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HomePageTabs from "../components/HomePageTabs";

export default function HomePage() {
  return (
    <>
      <HomePageTabs />
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Home
        </Typography>
        <Typography paragraph>
          Welcome to the home page! This is your dashboard where you can see an
          overview of everything.
        </Typography>
      </Box>
    </>
  );
}
