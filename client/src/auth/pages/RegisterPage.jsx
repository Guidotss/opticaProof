import { Button, Grid, TextField } from '@mui/material'
import { AuthLayOut } from '../layouts/AuthLayOut'

export const RegisterPage = () => {
  return (
    <AuthLayOut title='Registrarse'>
        <Grid container >
            <Grid item xs={12}>
                <TextField 
                  label='Nombre'
                  variant='outlined'
                  fullWidth
                  name='Nombre'
                  sx={{mb:1,mt:2}}
                /> 
            </Grid>
            <Grid item xs={12}>
                <TextField 
                  label='Email'
                  variant='outlined'
                  fullWidth
                  name='email'
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
                  sx={{mb:1,mt:2}}
                /> 
            </Grid>
            <Grid item spacing={2} xs={12} sm={12} xl={12}>
                <Button type='submit' variant='contained' fullWidth sx={{padding:2, borderRadius:3,mt:2}} >Registrarse</Button>
            </Grid>
        </Grid>
    </AuthLayOut>
  )
}