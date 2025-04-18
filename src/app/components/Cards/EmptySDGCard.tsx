import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { useRef } from "react";

interface EmptySDGCardProps {
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  loadingClassify: boolean;
}

export default function EmptySDGCard(fileChange: EmptySDGCardProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCardClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const staticTitle = "Upload Paper";
  const loadingTitle = "Classifying your paper...";

  const staticDescription =
    "To check the SDG classification of your research paper, please upload it here.";

  const loadingDescription =
    "Your research paper is being classified. Please wait a moment.";

  const displatyTitle = fileChange.loadingClassify ? loadingTitle : staticTitle;
  const displayDescription = fileChange.loadingClassify
    ? loadingDescription
    : staticDescription;

  return (
    <>
      <Card sx={{ maxWidth: 345 }} onClick={handleCardClick}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={
              fileChange.loadingClassify
                ? "/images/sdg_gif.gif"
                : "/images/sdg_gif_static.jpg"
            }
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {displatyTitle}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {displayDescription}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small" color="primary">
            Click Me!
          </Button>
        </CardActions> */}
      </Card>
      <input
        type="file"
        accept="application/pdf" 
        ref={fileInputRef}
        style={{ display: "none" }} 
        onChange={fileChange.onFileChange}
      />
    </>
  );
}
