import { Card, CardActionArea,CardMedia, CardContent } from '@mui/material'; 


export const GlassesAdminCard = ({ glasses }) => {

  console.log(glasses);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={glasses.image}
          alt={glasses.name}
        />
        <CardContent>
          <h2>{glasses.name}</h2>
          <p>{glasses.description}</p>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}