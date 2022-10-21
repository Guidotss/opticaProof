import { Box } from '@mui/material';
import { AdminGlassesLayOut } from '../../layout/AdminGlassesLayOut';


export const NewGlassesAdminPage = () => {
  return (
    <AdminGlassesLayOut>
      <Box sx={{width:'100vw', border:'solid 1px gray',boxShadow:2,backgroundColor:'#334746'}}>
        <h1 style={{color:'white', letterSpacing:5, fontWeight:'bold'}} >Nuevo anteojos</h1>
      </Box>
    </AdminGlassesLayOut>
  )
}