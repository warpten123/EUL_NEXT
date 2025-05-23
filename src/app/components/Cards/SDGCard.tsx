import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { SDGCard as Cards, SDGViewCard } from "@/app/types/SDG/SDGCard";
import { useEffect, useState } from "react";
import CustomizedDialogs from "../Extra/SDGDialog";
import { createSDGViewCard, getSDGColor } from "@/app/helpers/sdgHelpers";
import { Box, keyframes } from "@mui/material";

interface SDGCardProps {
  card: Cards;
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

export default function SDGCardDisplay(data: Readonly<SDGCardProps>) {
  const [open, setOpen] = useState(false);
  const [cardView, setCardView] = useState<SDGViewCard>();

  const handleClickOpenSDGView = () => setOpen(true);
  const handleCloseView = () => setOpen(false);

  useEffect(() => {
    setCardView(createSDGViewCard(data.card) as SDGViewCard);
  }, [data.card]);

  const sdgColor = getSDGColor(data.card.title);

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
      >
        <CardActionArea
          className="card-inner"
          sx={{
            transformStyle: "preserve-3d",
            transition: "transform 0.6s",
            position: "relative",
          }}
          onClick={handleClickOpenSDGView}
        >
          {/* Front */}
          <CardMedia
            component="img"
            height="400"
            image={data.card.image}
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
                height: `${data.card.percent}%`,
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
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {"Your research aligns with this SDG by"}
              </Typography>
              <Typography variant="h5" fontWeight="bold">
                {data.card.percent}%
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                {
                  "This percentage indicates how closely your research contributes to achieving this Sustainable Development Goal."
                }
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>

      {/* Dialog */}
      <CustomizedDialogs
        open={open}
        handleClickOpen={handleClickOpenSDGView}
        handleClose={handleCloseView}
        data={cardView as SDGViewCard}
      />
    </>
  );
}
