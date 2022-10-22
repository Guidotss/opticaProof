import { Box,Divider,Grid,IconButton,TextField,Button } from '@mui/material';
import { AddPhotoAlternate } from '@mui/icons-material';
import { AdminGlassesLayOut } from '../../layout/AdminGlassesLayOut';


export const NewGlassesAdminPage = () => {
  return (
    <AdminGlassesLayOut>

      <Box sm={12} sx={{width:'100vw', border:'solid 1px gray',boxShadow:2,backgroundColor:'#14213d'}}>
        <h1 style={{color:'white', letterSpacing:5, fontWeight:'bold', marginBottom:'40px',marginLeft:'250px', marginTop:'50px'}} >
          Agregar anteojos
        </h1>
      </Box>

      <Grid container spacing={2} xs={12} sx={{padding:2, border:'1px solid',boxShadow:4, marginTop:'50px', width:'50vw',height:'70vh', marginLeft:'600px', borderRadius:'15px'}} direction="column" alignItems="center" justifyContent="center">
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
                  <Box sx={{width:'500px', height:'100px', border:'solid 1px gray',boxShadow:2,backgroundColor:'#334746', borderRadius:'10px'}}>
                    <IconButton component="span">
                      <AddPhotoAlternate sx={{fontSize:'100px', marginTop:'-10px'}}/>
                    </IconButton>
                  </Box>
                </label>
              </Grid>
            </Grid>
            <Divider/>
            <Button type='submit' variant='contained' fullWidth sx={{padding:2, borderRadius:3, fontWeight:'bold',fontSize:'15px', marginTop:'10px' }}>Guardar</Button>
          </form>
        </Grid>
      </Grid>
    </AdminGlassesLayOut>
  )
}