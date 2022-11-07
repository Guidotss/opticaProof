import { useNavigate } from 'react-router-dom';
import { Card, CardActionArea,CardMedia, CardContent, CardActions, Button, Typography } from '@mui/material'; 




export const GlassesAdminCard = ({ glasses}) => {

  const navigate = useNavigate();

  const onCardClick = (id) => {
    navigate(`/admin/glasses/${id}`);
  }


  return (
    <Card 
      sx={{ 
      width: 345,
      maxWidth: 345, 
      marginBottom:3, 
      marginRight:2.5,
      padding:2, 
      borderRadius:'20px', 
        '&:hover':{
          boxShadow: 3,
          transform: 'scale(1.05)',
          transition: 'all 0.3s ease-in-out',
        } 
    }}>
      <CardActionArea sx={{borderRadius:'20px'}} onClick={() => onCardClick(glasses._id)} >
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
      <CardActions sx={{justifyContent:'space-between'}}>
        <Button 
          size="small"
          sx={{
            color:'inherit',
            fontWeight:'bold',
            fontFamily:'system-ui',
            padding:'7px',
            borderRadius:'10px',
            backgroundColor:'orange',
              '&:hover':{
                  backgroundColor:'orange', 
                  transform:'scale(1.04)', 
                  transition:'0.1s'
                },
          }}
        >Editar</Button>

        <Button 
          size="small"
          sx={{
            color:'inherit', 
            fontWeight:'bold',
            fontFamily:'system-ui',
            padding:'7px',
            borderRadius:'10px',
            backgroundColor:'salmon', 
              '&:hover':{
                  backgroundColor:'salmon', 
                  transform:'scale(1.04)', 
                  transition:'0.1s'
                },
          
          }}
        >Eliminar</Button>

      </CardActions>
    </Card>
  )
}