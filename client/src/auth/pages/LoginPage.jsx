import { Link as RouterLink, useNavigate } from 'react-router-dom'; 
import { useAuthStore, useForm } from '../../hooks'
import { Grid,TextField,Button,Typography,Link } from '@mui/material'; 
import { AuthLayOut } from '../layouts/AuthLayOut'; 
import { Google } from '@mui/icons-material'; 
import { useEffect } from 'react';
import Swal from 'sweetalert2';


const formFields = {
  email:'',
  password:''
}

export const LoginPage = () => {

  const navigate = useNavigate();
  const { email, password,onInputChange,onResetForm } = useForm( formFields );
  const { startLogin,errorMessage,status,startLoginWithGoogle } = useAuthStore();

  const onSubmit = (e) => {
    e.preventDefault(); 
    startLogin({email, password}); 
  }

  const onGoogleLogin = () => {
    startLoginWithGoogle();
  }

   useEffect(() => {
    if (status === 'authenticated'){
      navigate('/optica');
    }
    if(errorMessage !== undefined){
      Swal.fire('Error en la autenticación',errorMessage,'error');
    }

  },[errorMessage]) 

  return (
    <AuthLayOut title='Login'>
      <form>
        <Grid container>
            <Grid item xs={12}>
                <TextField 
                  label="email"
                  variant="outlined"
                  fullWidth
                  value={email}
                  onChange={ onInputChange }
                  name='email'
                  sx={{mb:1,mt:2}}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                  label="password"
                  variant="outlined"
                  fullWidth
                  value={password}
                  onChange={ onInputChange }
                  name='password'
                  type="password"
                  placeholder="********"
                  sx={{mb:1,mt:1}}
                />
            </Grid>

            <Grid container spacing={2} sx={{mb:2}}>

              <Grid item xl={6} xs={6} sm={6} sx={{mt:2}}>
                <Button type='submit' variant='contained' fullWidth sx={{padding:2, borderRadius:3, fontWeight:'bold',fontSize:'15px' }} onClick={ onSubmit }>Login</Button>
              </Grid>

              <Grid item xl={6} xs={6} sm={6} sx={{mt:2}}>
                <Grid>
                  <Button type='submit' variant='contained' fullWidth sx={{padding:2,borderRadius:3}} onClick={ onGoogleLogin }>
                    <Google/>
                    <Typography sx={{ml:1}} >Google</Typography>
                  </Button>
                </Grid>
              </Grid>  
              <Grid container direction='row' justifyContent='flex-end'>
                  <Link sx={{textDecoration:'none',color:'blue'}} component={ RouterLink } to='/auth/register' >
                    <Button variant='text' sx={{mt:2}}>Crear cuenta</Button>
                  </Link>
              </Grid>
            </Grid>

        </Grid>
      </form>
    </AuthLayOut>
  )
}