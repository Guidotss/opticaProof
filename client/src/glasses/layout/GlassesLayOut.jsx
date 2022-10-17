import { Box, Grid, Divider } from "@mui/material"
import { NavBar } from "../components"

export const GlassesLayOut = ({children}) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Box xs={12}>
        {children}
      </Box>
    </Grid>
  )
}