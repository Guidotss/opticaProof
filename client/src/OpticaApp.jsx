import { OpticaTheme } from './themes/OpticaTheme'; 
import { AppRouter } from './router/AppRouter';


export const OpticaApp = () => {

  return (
    <OpticaTheme>
        <AppRouter/>
    </OpticaTheme>
  )
}