import { useMemo } from 'react';
import { NavLink, NavLink as RouterLink } from 'react-router-dom';
import { AppBar, IconButton, MenuItem, Toolbar, Typography, Button,Box, Link } from '@mui/material';
import { Store } from '@mui/icons-material'
import { useAuthStore } from '../../hooks'
import { AccountMenu } from '../../ui'
import './navbar.css'


export const NavBar = () => {

  const { status,isAdmin,startLogout } = useAuthStore();
  

  const onLogout = () => {
    startLogout();
  }

  return (
    <AppBar xs={12} sm={12} position="relative">
      <Toolbar sx={{display:'flex' ,justifyContent:'space-between', backgroundColor:'white', padding:'10px', width:'100vw'}}>
         <Box sx={{alignItems:'center', justifyContent:'center', margin:'-90px'}} >
            <img 
              style={{height:'280px', borderRadius:'20px', marginTop:'-10px', marginLeft:'-5px', marginBottom:10}} 
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

        <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            {
              (status === 'authenticated')
              ?  <Button sx={{fontSize:22}} component={ RouterLink } to='/auth/login' color="inherit" underline="none" onClick={ onLogout }>
                  Logout
                </Button>
              : <Button sx={{fontSize:22}} component={ RouterLink } to='/auth/login' color="inherit" underline="none">
                  LogIn
                </Button>
            }
            {
              (status === 'authenticated' && isAdmin)
              ? <AccountMenu/>
              : null
            }
        </Box>
      </Toolbar>
      
  </AppBar>
    
  )
}