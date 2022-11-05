import { DisplaySettings } from '@mui/icons-material'
import { Box } from '@mui/material'
import { GlassesAdminList } from '../../components'
import { AdminGlassesLayOut } from '../../layout/AdminGlassesLayOut'


export const AllGlassesAdminPage = () => {
  return (
    <AdminGlassesLayOut>
       <Box sm={12} sx={{width:'100vw', border:'solid 1px gray',boxShadow:2,backgroundColor:'#14213d'}}>
        <h1 style={{color:'white', letterSpacing:5, fontWeight:'bold',marginLeft:'250px', marginTop:'28px'}} >
          Todos los anteojos
        </h1>
      </Box>
      <Box sx={{justifyContent:'center', width:'calc(80% - 50px)', marginLeft:'20vw', marginTop:'5vh'}}>
        <Box sx={{display:'flex', justifyContent:'space-around', margin:'auto', flexWrap:'wrap', flexDirection:'row'}}>
          <GlassesAdminList/>
        </Box>
      </Box>

    </AdminGlassesLayOut>
  )
}