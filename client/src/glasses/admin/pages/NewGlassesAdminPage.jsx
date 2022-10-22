import { Box,Divider,Grid,IconButton,TextField,Button, Typography } from '@mui/material';
import { AddPhotoAlternate,Save } from '@mui/icons-material';
import { AdminGlassesLayOut } from '../../layout/AdminGlassesLayOut';


export const NewGlassesAdminPage = () => {
  return (
    <AdminGlassesLayOut>

      <Box sm={12} sx={{width:'100vw', border:'solid 1px gray',boxShadow:2,backgroundColor:'#14213d'}}>
        <h1 style={{color:'white', letterSpacing:5, fontWeight:'bold', marginBottom:'40px',marginLeft:'250px', marginTop:'50px'}} >
          Agregar anteojos
        </h1>
      </Box>

      <Grid container 
        spacing={2} 
        sx={{
              padding:2, 
              border:'1px solid',
              boxShadow:4, marginTop:'50px', 
              width:'50vw',
              height:'70vh', 
              marginLeft:'600px', 
              borderRadius:'15px', 
              backgroundColor:'#f6fceb'
            }}
        direction="column" 
        alignItems="center" 
        justifyContent="center"
      >
        <Grid item sx={{textAlign:'center'}}>
          <form>
            <Grid container spacing={2} sx={{padding:2}} direction="column" alignItems="center" justifyContent="center">
              <Grid item sx={{textAlign:'center'}}>
                <TextField
                  label="Nombre del anteojo"
                  variant="outlined"
                  sx={{width:'500px'}}
                />
              </Grid>

              <Grid item sx={{textAlign:'center'}}>
                <TextField
                  label="Modelo"
                  variant="outlined"
                  sx={{width:'500px'}}
                />
              </Grid>  

              <Grid item  sx={{textAlign:'center'}}>
                <TextField
                  label="Marca"
                  variant="outlined"
                  sx={{width:'500px'}}
                />
              </Grid>

              <Grid item  sx={{textAlign:'center'}}>
                <input
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="raised-button-file"
                  multiple
                  type="file"
                />

                <label htmlFor="raised-button-file">
                  <Box sx={{width:'500px', height:'100px', border:'solid 1px gray',boxShadow:2,backgroundColor:'#14213d', borderRadius:'10px', marginTop:'20px'}}>
                    <IconButton component="span">
                      <AddPhotoAlternate sx={{fontSize:'100px', marginTop:'-10px', color:'white'}}/>
                      <Typography sx={{color:'white', fontSize:'20px',fontWeight:'bold', marginTop:'-10px', marginLeft:'-10px'}}>Agregar imagen</Typography>
                    </IconButton>
                  </Box>
                </label>

              </Grid>
            </Grid>

            <Divider/>
            <Box sx={{textAlign:'center', marginTop:'20px'}}>
              <IconButton
                type='submit' 
                variant='contained'
                sx={{
                  width:'500px',
                  height:'50px',
                  borderRadius:'10px', 
                  backgroundColor:'#14213d', 
                  color:'white', 
                  fontWeight:'bold', 
                  fontSize:'20px',
                  '&:hover': {
                    backgroundColor: '#14213d',
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
                >
                  <Save sx={{fontSize:'30px', marginRight:'10px'}}/>
                <Typography sx={{fontSize:'20px', fontWeight:'bold'}}>Guardar</Typography>
              </IconButton>
            </Box>
          </form>
        </Grid>
      </Grid>
    </AdminGlassesLayOut>
  )
}