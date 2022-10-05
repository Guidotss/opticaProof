import { Grid,Typography } from '@mui/material'


export const AuthLayOut = ({children,title=''}) => {
  return (
    <Grid 
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh',backgroundColor:'secondary.main',padding:3 }}
    >
        <Grid 
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            sx={{backgroundColor:'white',padding:4,borderRadius:3, boxShadow: 4, width:{sm:500}}}
        >
            <Typography variant='h4' component='h1' sx={{textAlign:'center',mb:1}}>{title}</Typography>
            {children}
        </Grid>
    </Grid>
  )
}