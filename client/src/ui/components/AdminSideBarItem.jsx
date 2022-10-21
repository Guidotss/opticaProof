import { NavLink, useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';


export const AdminSideBarItem = ({ route, title }) => {
  
  return (  
    <Box sx={{display:'flex'     }}>
        <NavLink to={`/admin/${ route }`}>
            <Typography sx={{color:'black' , fontSize:'20px'}}>{ title }</Typography>
        </NavLink>
    </Box>
  )
}