import { Box } from '@mui/material'
import { AdminGlassesLayOut } from '../../layout/AdminGlassesLayOut'
import datos from '../../../data/glassesMock.json'


export const AllGlassesAdminPage = () => {
  return (
    <AdminGlassesLayOut>
       <Box sm={12} sx={{width:'100vw', border:'solid 1px gray',boxShadow:2,backgroundColor:'#14213d'}}>
        <h1 style={{color:'white', letterSpacing:5, fontWeight:'bold',marginLeft:'250px', marginTop:'28px'}} >
          Todos los anteojos
        </h1>
      </Box>

    </AdminGlassesLayOut>
  )
}