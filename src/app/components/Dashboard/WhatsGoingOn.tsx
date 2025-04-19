"use client";
import { staticSDGData } from "@/app/data/staticSDGData";
import React from "react";
import AllSDGCard from "./AllSDGCard";
import { Box } from "@mui/material";


export default function WhatsGoingOn() {


  
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 1,
        mt: 6,
      }}
    >
      {staticSDGData.map((card, index) => (
        <AllSDGCard key={index + 1} card={card} />
      ))}
    </Box>
  );
}
