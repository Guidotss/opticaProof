import { useNavigate } from 'react-router-dom';
import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import { GlassesLayOut } from '../layout/GlassesLayOut'; 
import 'animate.css'
import './homePage.css'

export const HomePage = () => {

  
  const navigate = useNavigate();

  const navigateToSunGlasses = () => {
    navigate('/lentesdesol');
  }

  return (
    <GlassesLayOut>
      <Grid sx={{display:'flex', flexDirection:'row',justifyContent:'space-between'}}>
      <Box className='homeTextContainer' xs={6} sx={{height:'87vh'}}>
          <Box sx={{alignItems:'center', justyContent:'center',textAlign:'center', marginTop:5}}>
            <Typography className='animate__animated animate__fadeIn animate__slower' variant='h3' sx={{color:'black',fontSize:70, fontWeight:'bold'}}>Bienvenido</Typography>
            <Typography className='animate__animated animate__fadeIn animate__delay-1s' variant="h5" sx={{color:'black', fontWeight:'bold',fontSize:40, textAlign:'center', marginTop:5}}>Tenemos el modelo que necesitas</Typography>
            <Button className='animate__animated animate__fadeIn animate__delay-1s'
              onClick={ navigateToSunGlasses }
              variant="contained"
              sx={{
                
                color:'white',
                backgroundColor:'black', 
                marginTop:10, 
                marginBottom:2, 
                width:250, 
                height:70, 
                fontWeight:'bold', 
                fontSize:20,  
                boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
                border:'1px black solid', '&:hover': {backgroundColor: 'white', color:'black'}}}
                
              >Lentes de sol
            </Button>
          </Box>
        </Box>
        <Box  xs={6}>
          <img src="../../../assets/rayban.jpeg" alt="rayban.jpeg" style={{height:'87vh', width:'72.6vw'}}  />
        </Box>
      </Grid>
    </GlassesLayOut>
  )
}