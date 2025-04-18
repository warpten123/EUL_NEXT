import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { SDGCard as Cards, SDGViewCard } from "@/app/types/SDG/SDGCard";
import { useEffect, useState } from "react";
import CustomizedDialogs from "../Extra/SDGDialog";
import { createSDGViewCard } from "@/app/helpers/sdgHelpers";
import { Box, keyframes } from "@mui/material";

interface SDGCardProps {
  card: Cards;
}

const getSDGColor = (title: string): string => {
  const sdgColors: { [key: string]: string } = {
    "Goal 1: No Poverty": "#E5243B",
    "Goal 2: Zero Hunger": "#DDA63A",
    "Goal 3: Good Health and Well-Being": "#4C9F38",
    "Goal 4: Quality Education": "#C5192D",
    "Goal 5: Gender Equality": "#FF3A21",
    "Goal 6: Clean Water and Sanitation": "#26BDE2",
    "Goal 7: Affordable and Clean Energy": "#FCC30B",
    "Goal 8: Decent Work and Economic Growth": "#A21942",
    "Goal 9: Industry, Innovation, and Infrastructure": "#FD6925",
    "Goal 10: Reduced Inequalities": "#DD1367",
    "Goal 11: Sustainable Cities and Communities": "#FD9D24",
    "Goal 12: Responsible Consumption and Production": "#BF8B2E",
    "Goal 13: Climate Action": "#3F7E44",
    "Goal 14: Life Below Water": "#0A97D9",
    "Goal 15: Life on Land": "#56C02B",
    "Goal 16: Peace, Justice and Strong Institutions": "#00689D",
    "Goal 17: Partnership for the Goals": "#19486A",
  };
  return sdgColors[title] || "#4fc3f7";
};

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
