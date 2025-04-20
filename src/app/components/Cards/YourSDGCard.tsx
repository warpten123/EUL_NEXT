import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import CardActionArea from "@mui/material/CardActionArea";

import { getSDGColor } from "@/app/helpers/sdgHelpers";
import { Box } from "@mui/material";
import { YourSDGCard } from "@/app/types/SDG/SDGCard";


interface SDGCardProps {
  card: YourSDGCard;
}

// const waveAnim = keyframes`
//   0% {
//     transform: translateX(0) translateY(0);
//   }
//   50% {
//     transform: translateX(-25%) translateY(5%);
//   }
//   100% {
//     transform: translateX(0) translateY(0);
//   }
// `;

export default function YourSDGCardComponent(data: Readonly<SDGCardProps>) {
 
  // const handleClickOpenSDGView = () => setOpen(true);
  // const handleCloseView = () => setOpen(false);

  const handleCardClick = () => {
    // Redirect to the URL specified in the card
    if (data?.card.url) {
      window.open(data?.card.url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
          perspective: "1000px",
          "&:hover .card-inner": {
            transform: "rotateY(180deg)",
          },
        }}
        onClick={handleCardClick}
      >
        <CardActionArea
          className="card-inner"
          sx={{
            transformStyle: "preserve-3d",
            transition: "transform 0.6s",
            position: "relative",
          }}
        >
          {/* Front */}
          <CardMedia
            component="img"
            height="400"
            image={data.card.staticImage}
            alt={data.card.url}
            sx={{ backfaceVisibility: "hidden" }}
          />
          {/* Back */}
          <CardContent
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              backgroundColor: "rgba(19, 6, 6, 0.85)",
              color: "white",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: `90%`,
                overflow: "hidden",
                zIndex: 0,
              }}
            >
              {/* <Box
                sx={{
                  width: "200%",
                  height: "200%",
                  backgroundColor: `#000000`,
                  borderRadius: "30%",
                  animation: `${waveAnim} 3s infinite ease-in-out`,
                  transform: "translateX(0)",
                }}
              /> */}
            </Box>

            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                textAlign: "center",
                px: 1,
                display: "flex",
                flexWrap: "wrap",
                gap: 1, // Add spacing between buttons
                justifyContent: "center",
              }}
            >
              {data.card.goals.map((goal, index) => (
                <Box
                  key={index}
                  component="button"
                  sx={{
                    backgroundColor: getSDGColor(goal.goalName), // Dynamically set the background color
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    padding: "8px 16px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    textAlign: "center",
                    minWidth: "50px",
                  }}
                >
                  {goal.goalName} {/* Label the button with the goal name */}
                </Box>
              ))}
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>

      {/* Dialog */}
      {/* <CustomizedDialogs
        open={open}
        handleClickOpen={handleClickOpenSDGView}
        handleClose={handleCloseView}
        data={cardView as SDGViewCard}
      /> */}
    </>
  );
}
