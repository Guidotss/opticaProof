import { OpticaTheme } from './themes/OpticaTheme'; 
import { AppRouter } from './router/AppRouter';
import './index.css';

export const OpticaApp = () => {

  return (
    <OpticaTheme>
        <AppRouter/>
    </OpticaTheme>
  )
}