import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import { Box, keyframes, Typography } from "@mui/material";
import { SDGViewCard } from "@/app/types/SDG/SDGCard";
import { getSDGColor } from "@/app/helpers/sdgHelpers";
import FullScreenDialog from "./LandingPageSDG";

interface SDGCardProps {
  card: SDGViewCard;
}



const waveAnim = keyframes`
  0% {
    transform: translateX(0) translateY(0);
  }
  50% {
    transform: translateX(-25%) translateY(5%);
  }
  100% {
    transform: translateX(0) translateY(0);
  }
`;


export default function AllSDGCard(data: Readonly<SDGCardProps>) {

  const sdgColor = getSDGColor(data.card.title);
  return (
    <>
      <Card
        sx={{
          maxWidth: 360,
          perspective: "1000px",
          "&:hover .card-inner": {
            transform: "rotateY(180deg)",
          },
        }}
        
      >
        <CardActionArea
          className="card-inner"
          sx={{
            transformStyle: "preserve-3d",
            transition: "transform 0.6s",
            position: "relative",
          }}
          // onClick={() => {
          //   if (data?.card.targetLink) {
          //     window.open(data?.card.targetLink, "_blank", "noopener,noreferrer");
          //   }
          // }}
        
        >
          {/* Front */}
          <CardMedia
            component="img"
            height="400"
            image={data.card.imageClear}
            alt={data.card.title}
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
                height: `80%`, //change this value to adjust the height of the wave animation
                overflow: "hidden",
                zIndex: 0,
              }}
            >
              <Box
                sx={{
                  width: "200%",
                  height: "200%",
                  backgroundColor: sdgColor,
                  borderRadius: "30%",
                  animation: `${waveAnim} 3s infinite ease-in-out`,
                  transform: "translateX(0)",
                }}
              />
            </Box>

            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                textAlign: "center",
                px: 1,
              }}
            >
            
              <Typography variant="h5" fontWeight="bold">
                {data.card.description}
              </Typography>
              {/* <FullScreenDialog /> */}
              {/* <Typography variant="body2" sx={{ mt: 4 }}>
                {
                  "This percentage indicates how closely your research contributes to achieving this Sustainable Development Goal."
                }
              </Typography> */}
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
