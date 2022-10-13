import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom'; 
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { GlassesRoutes } from '../glasses/routes/GlassesRoutes'
import { useAuthStore } from '../hooks';
import { CheckingAuth } from '../ui'


export const AppRouter = () => {

  const { status, checkAuthToken } = useAuthStore(); 

  useEffect(() => {
    checkAuthToken();
  },[]);

  if(status === 'authenticating') return <CheckingAuth />
  
  
  return (
    <Routes>
      <Route path='/auth/*' element={<AuthRoutes/>}/>
      <Route path='/*' element={<GlassesRoutes/>}/>
      <Route path='/' element={<Navigate to='/inicio'/>}/>
    </Routes>
  )
}