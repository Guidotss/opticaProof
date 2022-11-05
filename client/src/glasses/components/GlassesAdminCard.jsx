import { Card, CardActionArea,CardMedia, CardContent, CardActions, Button, Typography } from '@mui/material'; 


export const GlassesAdminCard = ({ glasses }) => {

  console.log(glasses);
  return (
    <Card 
      sx={{ 
      maxWidth: 345, 
      marginBottom:3, 
      padding:2, 
      borderRadius:'20px', 
        '&:hover':{
          boxShadow: 3,
          transform: 'scale(1.05)',
          transition: 'all 0.3s ease-in-out',
        } 
    }}>
      <CardActionArea sx={{borderRadius:'20px'}}>
        <CardMedia
          component="img"
          height="140"
          image={glasses.img}
          alt={glasses.name}
        />
        <CardContent>
          <h2>{glasses.name}</h2>
          <p>{glasses.description}</p>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{justifyContent:'space-between'}}>
        <Button 
          size="small"
          sx={{color:'inherit',
          backgroundColor:'orange',
            '&:hover':{
                backgroundColor:'orange', 
                transform:'scale(1.04)', 
                transition:'0.1s'
              }
          }}
        >Editar</Button>

        <Button 
          size="small"
          sx={{
          color:'inherit', 
          backgroundColor:'salmon', 
            '&:hover':{
                backgroundColor:'salmon', 
                transform:'scale(1.04)', 
                transition:'0.1s'
              }
          }}
        >Eliminar</Button>

      </CardActions>
    </Card>
  )
}