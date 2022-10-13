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
      <Toolbar sx={{display:'flex' ,justifyContent:'space-between', backgroundColor:'white', padding:'30px'}}>
         <Box sx={{alignItems:'center', justifyContent:'center'}} >
            <img 
              style={{height:'70px', borderRadius:'20px', marginTop:'-20px', marginLeft:'-20px'}} 
              src=".../../../../../assets/Logo.png" alt="Logo.jpeg" 
            />
         </Box>

        <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
          <NavLink 
            to='/inicio'
          className={({isActive}) => isActive ? 'nav-link-active' : ''}
          
          >
            Inicio
          </NavLink>
          <NavLink 
            to='/lentesdesol'
            className={({isActive}) => isActive ? 'nav-link-active' : ''}
            >
            Lentes de sol
          </NavLink>
          <NavLink 
            to='/contactologia'
            className={({isActive}) => isActive ? 'nav-link-active' : ''}
            >
            Contactologia
          </NavLink>
          <NavLink 
            to='/contacto'
            className={({isActive}) => isActive ? 'nav-link-active' : ''}
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