import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import { GlassesLayOut } from '../layout/GlassesLayOut'; 
import 'animate.css'

export const HomePage = () => {
  return (
    <GlassesLayOut>
      <Grid sx={{display:'flex', flexDirection:'row',justifyContent:'space-between'}}>
      <Box xs={6} sx={{backgroundColor:'black', height:585}}>
          <Box className='animate__animated animate__fadeInDown' sx={{alignItems:'center', justyContent:'center',textAlign:'center', marginTop:15}}>
            <Typography variant="h3" sx={{color:'white', fontWeight:'bold', textAlign:'center', marginTop:2}}>Welcome to Glasses Store</Typography>
            <Typography variant="h5" sx={{color:'white', fontWeight:'bold', textAlign:'center', marginTop:2}}>We have the best glasses in the world</Typography>
            <Button 
              variant="contained"
              sx={{
                
                color:'white',
                backgroundColor:'black', 
                marginTop:10, 
                marginBottom:2, 
                width:200, 
                height:50, 
                fontWeight:'bold', 
                fontSize:20, 
                borderRadius:10, 
                border:'2px solid', '&:hover': {backgroundColor: 'white', color:'black'}}}

              >Shop Now
            </Button>
          </Box>
        </Box>
        <Box  xs={6}>
          <img src="../../../assets/rayban.jpeg" alt="rayban.jpeg" style={{height:585, width:'100%'}}  />
        </Box>
      </Grid>
    </GlassesLayOut>
  )
}