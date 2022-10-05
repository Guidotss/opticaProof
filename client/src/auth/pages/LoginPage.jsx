import { Link as RouterLink } from 'react-router-dom'; 
import { useForm } from '../../hooks'
import { Grid,TextField,Button,Typography,Link } from '@mui/material'; 
import { AuthLayOut } from '../layouts/AuthLayOut'; 
import { Facebook } from '@mui/icons-material'; 


export const LoginPage = () => {

  const { email, password, handleChange,reset } = useForm({
      email: 'guidolguin2@gmail.com',
      password: '123456'
  }); 

  const onSubmit = (e) => {

    e.preventDefault(); 
    console.log({email,password}); 
  }

  const onFacebookLogin = () => {
    console.log('onFacebookLogin'); 
  }

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
                  onChange={handleChange}
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
                  onChange={handleChange}
                  name='password'
                  type="password"
                  placeholder="********"
                  sx={{mb:1,mt:1}}
                />
            </Grid>

            <Grid container spacing={2} sx={{mb:2}}>

              <Grid item xl={6} xs={6} sm={6} sx={{mt:2}}>
                <Button type='submit' variant='contained' fullWidth sx={{padding:2, borderRadius:3}} onClick={ onSubmit }>Login</Button>
              </Grid>

              <Grid item xl={6} xs={6} sm={6} sx={{mt:2}}>
                <Button type='submit' variant='contained' fullWidth sx={{padding:2,borderRadius:3}} onClick={ onFacebookLogin }>
                  <Facebook/>
                  <Typography sx={{ml:1}} >Facebook</Typography>
                </Button>
              </Grid>

            </Grid>

            <Grid container direction='row' justifyContent='flex-end'>
                  <Link sx={{textDecoration:'none',color:'blue'}} component={ RouterLink } color='inherit' to='/auth/register' >
                      Crear una Cuenta
                  </Link>
            </Grid>

        </Grid>
      </form>
    </AuthLayOut>
  )
}