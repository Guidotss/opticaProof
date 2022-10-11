import { Navigate, Route, Routes } from 'react-router-dom'; 
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { GlassesRoutes } from '../glasses/routes/GlassesRoutes'
import { useSelector } from 'react-redux'; 
import { useAuthStore } from '../hooks';
import { CheckingAuth } from '../ui'


export const AppRouter = () => {

  const { status } = useAuthStore(); 

  if(status === 'authenticating') return <CheckingAuth /> 
  
  return (
    <Routes>
        {
          (status === 'not-authenticated' )
          ? <Route path="/auth/*" element={<AuthRoutes/>}/>
          : <Route path="*" element={<GlassesRoutes/>}/>
        }
        <Route path='*' element={<Navigate to={'/auth/login'}/>}/>
    
    </Routes>
  )
}