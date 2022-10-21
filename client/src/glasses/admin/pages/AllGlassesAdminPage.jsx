import { Box } from '@mui/material'
import { AdminGlassesLayOut } from '../../layout/AdminGlassesLayOut'



export const AllGlassesAdminPage = () => {
  return (
    <AdminGlassesLayOut>
      <Box sx={{width:'100vw', border:'solid 1px gray',boxShadow:2,backgroundColor:'#14213d'}}>
        <h1 style={{color:'white', letterSpacing:5, fontWeight:'bold'}}>Todos los anteojos</h1>
      </Box>
    </AdminGlassesLayOut>
  )
}