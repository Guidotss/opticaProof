import { Link as RouterLink } from 'react-router-dom'
import { Link } from '@mui/material'

export const AdminLink = ({ route, title }) => {
  return (
    <Link 
    variant="inherit" 
    component={RouterLink}
    to={ `/admin/${route}` }
    sx={{
          ml:1, 
          textDecoration:'none', 
          color:'inherit', 
          fontSize:17, 
          letterSpacing:0
        }}
        >
      { title }
  </Link>
  )
}