import * as React from "react";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import SDGCard from "../components/Cards/SDGCard";
import { Box } from "@mui/material";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export interface Cards {
  title: string;
  description: string;
  image: string;
}

const mockCards: Cards[] = [
  {
    title: "Goal 1: No Poverty",
    description: "No Poverty",
    image: "/images/goal 1.png",
  },
  {
    title: "Goal 2",
    description: "Zero Hunger",
    image: "/images/goal 2.png",
  },
  {
    title: "Goal 3",
    description: "Good Health and Well-being",
    image: "/images/goal 3.png",
  },
  {
    title: "Goal 4",
    description: "Quality Education",
    image: "/images/goal 4.png",
  },
];

const TestPage: React.FC = () => {
  return (
    <>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        Upload files
        <VisuallyHiddenInput
          type="file"
          onChange={(event) => console.log(event.target.files)}
          multiple
        />
      </Button>
      {
        <Box
          sx={{
            mt: 4,
            display: "flex",
            gap: 3,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {mockCards.map((card, index) => (
            <SDGCard card={card} key={index + 1} />
          ))}
        </Box>
      }
    </>
  );
};

export default TestPage;
