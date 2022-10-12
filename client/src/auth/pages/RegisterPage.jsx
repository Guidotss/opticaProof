import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, TextField,Link } from '@mui/material'
import { AuthLayOut } from '../layouts/AuthLayOut'
import { useAuthStore, useForm } from '../../hooks'

const registerFields = {
  displayName: '',
  email: '',
  password: '',
}

export const RegisterPage = () => {

  const { displayName, email, password, onInputChange } = useForm(registerFields); 
  const { startRegister } = useAuthStore(); 


  const onRegister = (e) => {
    e.preventDefault(); 
    startRegister({displayName, email, password})
  }

  return (
    <AuthLayOut title='Registrarse'>
        <Grid container >
            <Grid item xs={12}>
                <TextField 
                  label='Nombre'
                  variant='outlined'
                  fullWidth
                  name='displayName'
                  value={ displayName }
                  onChange={ onInputChange }
                  sx={{mb:1,mt:2}}
                /> 
            </Grid>
            <Grid item xs={12}>
                <TextField 
                  label='Email'
                  variant='outlined'
                  fullWidth
                  name='email'
                  value={ email }
                  onChange={ onInputChange }
                  sx={{mb:1,mt:2}}
                /> 
            </Grid>
            <Grid item xs={12}>
                <TextField 
                  label='Password'
                  variant='outlined'
                  fullWidth
                  name='password'
                  placeholder='********'
                  value={ password }
                  onChange={ onInputChange }
                  sx={{mb:1,mt:2}}
                /> 
            </Grid>

            <Grid item xs={12} sm={12} xl={12}>
                <Button type='submit' onClick={ onRegister } variant='contained' fullWidth sx={{padding:2, borderRadius:3,mt:2, fontWeight:'bold', fontSize:'15px'}} >Registrarse</Button>
            </Grid>

            <Grid container direction='row' justifyContent='flex-end'>
                  <Link sx={{textDecoration:'none'}} component={ RouterLink } to='/auth/login' >
                    <Button variant='text' sx={{mt:2}}>¿Ya tienes una cuenta?</Button>
                  </Link>
            </Grid>
        </Grid>
    </AuthLayOut>
  )
}