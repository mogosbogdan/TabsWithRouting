"use client";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function ProfilePage() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Profile
      </Typography>
      <Typography paragraph>
        This is your profile page where you can view and edit your personal
        information.
      </Typography>
    </Box>
  );
}
