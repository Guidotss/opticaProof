import { ThemeProvider } from '@emotion/react'; 
import CssBaseline from '@mui/material/CssBaseline';
import { mintGreenTheme } from './index'; 

export const OpticaTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ mintGreenTheme }>
        <CssBaseline />
        { children }
    </ThemeProvider>
  )
}