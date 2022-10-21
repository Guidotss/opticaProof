import { Box } from '@mui/material'
import { AdminGlassesLayOut } from '../../layout/AdminGlassesLayOut'


export const AllGlassesAdminPage = () => {
  return (
    <AdminGlassesLayOut>
      <Box sx={{width:'100vw', border:'solid 1px gray'}}>
        <h1>Todos los anteojos</h1>
      </Box>
    </AdminGlassesLayOut>
  )
}