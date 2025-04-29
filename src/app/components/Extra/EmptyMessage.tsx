import { Box, Typography } from "@mui/material";
import React from "react";

interface EmptyMessageProps {
  mainMessage: string;
  description: string;
}

const EmptyMessage: React.FC<EmptyMessageProps> = ({ mainMessage, description }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%", // Full height of the container
        textAlign: "center",
        padding: 2,
        backgroundColor: "#f9f9f9", // Light background for better contrast
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
      }}
    >
      <Typography variant="h6" color="textSecondary" gutterBottom>
        {mainMessage}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {description}
      </Typography>
    </Box>
  );
};

export default EmptyMessage;