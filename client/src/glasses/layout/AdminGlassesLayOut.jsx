import { Grid,IconButton } from '@mui/material'
import { SideBar } from '../components'


export const AdminGlassesLayOut = ({ children }) => {
  return (
    <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <SideBar/>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{textAlign:'center'}}>
            { children }
        </Grid>
    </Grid>
  )
}