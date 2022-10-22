import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom'; 
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { NotFoundPage } from '../error/page/NotFoundPage';
import { GlassesRoutes } from '../glasses/routes'
import { AdminRoutes } from '../glasses/admin/routes/AdminRoutes'
import { useAuthStore } from '../hooks';
import { CheckingAuth } from '../ui'


export const AppRouter = () => {

  const { status,checkAuthToken,checkAdminCredentials,isAdmin } = useAuthStore(); 

  useEffect(() => {
    checkAuthToken();
  },[]);

  
  if(status === 'authenticating') return <CheckingAuth />
  
  return (
    <Routes>
        <Route path='/optica/*' element={<GlassesRoutes/>}/>
        <Route path='/auth/*' element={<AuthRoutes/>}/>
        {
          (status === 'authenticated' && isAdmin) && <Route path='/admin/*' element={<AdminRoutes/>}/>
        }
        <Route path='/' element={<Navigate to='/optica'/>}/>
        <Route path='/*' element={<NotFoundPage/>}/>
    </Routes>
  )
}