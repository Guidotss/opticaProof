import { Box,Divider,Grid,IconButton,TextField,Button, Typography,CircularProgress } from '@mui/material';
import { AddPhotoAlternate,Save,CheckCircle } from '@mui/icons-material';
import Swal from 'sweetalert2';
import { AdminGlassesLayOut } from '../../layout/AdminGlassesLayOut';
import { useAdminGlasses, useForm } from '../../../hooks';
import { useEffect } from 'react';


const formFields = {
  name:'',
  brand:'',
  description:'',
}; 

export const NewGlassesAdminPage = () => {

  const { name,description,file,brand,onInputChange,onResetForm } = useForm( formFields );
  const { startUploadingFile, startUploadingGlasses, status,errorMessage } = useAdminGlasses();

  const onSubmit = (e) => {
    e.preventDefault();
    startUploadingGlasses({ name,description,brand });
    onResetForm();
  }

  const onFileChange = ({ target }) => {
    startUploadingFile(target.files[0]);
  }

  useEffect(() => {

    if(status === 'uploaded'){
      Swal.fire('Anteojo creado','El anteojo se ha creado correctamente','success');
    }
    if(status === 'error'){
      Swal.fire('Error',errorMessage,'error');
    }

  },[status])

  return (
    <AdminGlassesLayOut>

      <Box sm={12} sx={{width:'100vw', border:'solid 1px gray',boxShadow:2,backgroundColor:'#14213d'}}>
        <h1 style={{color:'white', letterSpacing:5, fontWeight:'bold',marginLeft:'250px', marginTop:'28px'}} >
          Agregar anteojos
        </h1>
      </Box>

      <Grid container 
        spacing={2} 
        sx={{
              border:'1px solid',
              boxShadow:4, 
              marginTop:'3vh', 
              width:'43vw',
              height:'82vh', 
              marginLeft:'37vw', 
              borderRadius:'15px', 
              backgroundColor:'#f6fceb',
            }}
        direction="column" 
        alignItems="center" 
        justifyContent="center"
      >
        <Grid item sx={{textAlign:'center'}}>
          <form style={{padding:20}} onSubmit={ onSubmit }>
            <Grid  container spacing={2} sx={{padding:2}} direction="column" alignItems="center" justifyContent="center">

              <Grid item xs={12} sx={{textAlign:'center'}}>
                <TextField
                  xs={12}
                  name='name'
                  label="Nombre del anteojo"
                  variant="outlined"
                  color="success"
                  sx={{width:'500px','@media (max-width: 600px)':{width:'300px'}}}
                  onChange={ onInputChange }
                  value={name}
                />
              </Grid>

              <Grid item  sx={{textAlign:'center'}}>
                <TextField
                  xs={12}
                  name='brand'
                  label="Marca"
                  variant="outlined"
                  color="success"
                  sx={{width:'500px'}}
                  onChange={ onInputChange }
                  value={brand}
                />
              </Grid>

              <Grid item  sx={{textAlign:'center'}}>
                <TextField
                  xs={12}
                  name='description'
                  label="Descripci??n"
                  variant="outlined"
                  color="success"
                  multiline
                  rows={4}
                  sx={{width:'500px'}}
                  onChange={ onInputChange }
                  value={description}
                />
              </Grid>

              <Grid item xs={12} sx={{textAlign:'center', }}>
                <input
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="raised-button-file"
                  multiple
                  type="file"
                  name='file'
                  value={ file }
                  onChange={ onFileChange }
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
                disabled={ status === 'checking' }
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
                  {
                    (status === 'checking') && <CircularProgress size={20} color="success" />
                  }

                <Typography xs={12} sx={{fontSize:'20px', fontWeight:'bold'}}>Guardar</Typography>
              </IconButton>
            </Box>
          </form>
        </Grid>
      </Grid>
    </AdminGlassesLayOut>
  )
}