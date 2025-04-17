import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { SDGCard as Cards } from '@/app/types/SDG/SDGCard';




interface SDGCardProps {
    card: Cards
}


export default function SDGCardDisplay(data: SDGCardProps) {

  return (
    <Card sx={{ maxWidth: 345
     }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image={data.card.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.card.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           {data.card.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}