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
              boxShadow:4, marginTop:'5vh', 
              width:'50vw',
              height:'70vh', 
              marginLeft:'35vw', 
              borderRadius:'15px', 
              backgroundColor:'#f6fceb'
            }}
        direction="column" 
        alignItems="center" 
        justifyContent="center"
      >
        <Grid item sx={{textAlign:'center'}}>
          <form>
            <Grid  container spacing={2} sx={{padding:2}} direction="column" alignItems="center" justifyContent="center">
              <Grid item xs={12} sx={{textAlign:'center'}}>
                <TextField
                  label="Nombre del anteojo"
                  variant="outlined"
                  color="success"
                  sx={{width:'500px','@media (max-width: 600px)':{width:'300px'}}}
                />
              </Grid>

              <Grid item xs={12} sx={{textAlign:'center'}}>
                <TextField
                  label="Modelo"
                  variant="outlined"
                  color="success"
                  sx={{width:'500px'}}
                />
              </Grid>  

              <Grid item  sx={{textAlign:'center'}}>
                <TextField
                  xs={12}
                  label="Marca"
                  variant="outlined"
                  color="success"
                  sx={{width:'500px'}}
                />
              </Grid>

              <Grid item xs={12} sx={{textAlign:'center', }}>
                <input
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="raised-button-file"
                  multiple
                  type="file"
                />

                <label htmlFor="raised-button-file">
                  <Box xs={12} sx={{width:'500px', height:'100px', border:'solid 1px gray',boxShadow:2,backgroundColor:'#14213d', borderRadius:'10px', marginTop:'20px'}}>
                    <IconButton xs={12} component="span">
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
                xs={12}
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
                  marginBottom:'20px',
                  '&:hover': {
                    backgroundColor: '#14213d',
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
                >
                  <Save sx={{fontSize:'30px', marginRight:'10px'}}/>
                <Typography xs={12} sx={{fontSize:'20px', fontWeight:'bold'}}>Guardar</Typography>
              </IconButton>
            </Box>
          </form>
        </Grid>
      </Grid>
    </AdminGlassesLayOut>
  )
}