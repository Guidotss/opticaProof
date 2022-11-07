import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Card, CardContent, CardMedia, Divider, Grid, IconButton, TextField, Typography } from '@mui/material';
import {  Edit } from '@mui/icons-material';
import { useAdminGlasses, useForm } from '../../../hooks';
import { AdminGlassesLayOut } from '../../layout/AdminGlassesLayOut';


export const GlassesAdminPage = () => {
  
  const { id } = useParams();
  const { startFindGlasses, glasses } = useAdminGlasses();
  const { onInputChange, formState } = useForm({
    name: '',
    description: '',
    brand: '',
  });

  const { name, brand, description } = formState;
  
  
  useEffect(() => {
    startFindGlasses(id);
  }, [id]);
  
  if(JSON.stringify(glasses) === '{}') return; 
  
  console.log(name);

  return (
    <AdminGlassesLayOut>
      <Box sm={12} sx={{width:'100vw', border:'solid 1px gray',boxShadow:2,backgroundColor:'#14213d'}}>
        <h1 style={{color:'white', letterSpacing:5, fontWeight:'bold',marginLeft:'250px', marginTop:'28px'}} >
          Detalles del anteojos
        </h1>
      </Box>
      <Box
        sx={{
          display:'flex',
          width:'calc(80% - 50px)', 
          marginLeft:'25vw',
          marginTop:'5vh',
        }}
      >

        <Box
          sx={{
            display:'flex',
            flexWrap:'wrap', 
            flexDirection:'row',
          }}
        >
          <Card sx={{ width: 400, maxWidth: 400, marginBottom:3, marginRight:2.5, padding:2, borderRadius:'20px' }}>
            <CardMedia
              component="img"
              image={glasses.image}
              alt={glasses.name}
            />
            <CardContent sx={{padding:2, marginTop:10}}>
              <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:'bold', fontSize:'30px'}}>
                { glasses.name }
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{fontWeight:'bold', fontSize:'20px'}}>
                { glasses.description }
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{width:200}}>
          <Divider orientation="vertical" flexItem sx={{width:100, height:500}} />
        </Box>
        <Box sx={{width:400}}>
          <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:'bold', fontSize:'30px', marginBottom:'50px'}}>
            Detalles
          </Typography>
         <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Nombre"
                focused
                color="warning"
                name='name'
                value={ name }
                onChange={ onInputChange }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField

                fullWidth
                focused
                color='warning'
                label="Marca"
                name='brand'
                value={ brand }
                onChange={ onInputChange }
                
              />
            </Grid>
                <Grid item xs={12}>
                  <TextField
    
                    fullWidth
                    label="descripcion"
                    focused
                    color='warning'
                    name='description'
                    value={ description }
                    onChange={ onInputChange }
                    rows={4}
                  />
                </Grid>
           </Grid>
           <IconButton
              sx={{marginTop:5,borderRadius:'0'}}
              variant="contained"
              color="warning"
              aria-label="upload picture"
              component="span"
            >
              <Edit />
              <Typography variant="body2" color="warning" sx={{fontWeight:'bold', fontSize:'20px'}}>
                Editar
              </Typography>
            </IconButton>
          </Box>
      </Box>
    </AdminGlassesLayOut>
  )
}