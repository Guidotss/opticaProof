import { NavLink, NavLink as RouterLink } from 'react-router-dom';
import { AppBar, IconButton, MenuItem, Toolbar, Typography, Button,Box, Link } from '@mui/material';
import { Store } from '@mui/icons-material'
import { useAuthStore } from '../../hooks'
import './navbar.css'


export const NavBar = () => {

  const { status,startLogout } = useAuthStore();

  const onLogout = () => {
    startLogout();
  }

  return (
    <AppBar xs={12} sm={12} position="static">
      <Toolbar sx={{display:'flex' ,justifyContent:'space-between', backgroundColor:'white', padding:'10px'}}>
         <Box sx={{alignItems:'center', justifyContent:'center', margin:'-90px'}} >
            <img 
              style={{height:'300px', borderRadius:'20px', marginTop:'-20px', marginLeft:'-20px'}} 
              src=".../../../../../assets/Logo.png" alt="Logo.jpeg" 
            />
         </Box>

        <Box className='links' sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
          <NavLink 
            to='/inicio'
          className={({isActive}) => isActive ? 'active' : ''}
          
          >
            Inicio
          </NavLink>
          <NavLink 
            to='/lentesdesol'
            className={({isActive}) => isActive ? 'active' : ''}
            >
            Lentes de sol
          </NavLink>
          <NavLink 
            to='/contactologia'
            className={({isActive}) => isActive ? 'active' : ''}
            >
            Contactologia
          </NavLink>
          <NavLink 
            to='/contacto'
            className={({isActive}) => isActive ? 'active' : ''}
            >
            Contacto
          </NavLink>

        </Box>

        {
          status === 'authenticated'
          ? <Button sx={{fontSize:22}} component={ RouterLink } to='/auth/login' color="inherit" underline="none" onClick={ onLogout }>
              LogOut
            </Button>
          : <Button sx={{fontSize:22}} component={ RouterLink } to='/auth/login' color="inherit" underline="none">
              LogIn
            </Button>
        }
      </Toolbar>
      
  </AppBar>
    
  )
}