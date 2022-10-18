import { Routes, Route } from 'react-router-dom';
import { HomePage, SunGlassesPage,ContactologiaPage,ContactPage } from '../pages'
import { useAuthStore } from '../../hooks'
import { useEffect } from 'react';


export const GlassesRoutes = () => {

  const { status,checkAuthToken } = useAuthStore();

  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/inicio' element={<HomePage/>}/>
        <Route path='lentesdesol' element={<SunGlassesPage/>}/>
        <Route path='/contactologia' element={<ContactologiaPage/>}/>
        <Route path='/contacto' element={<ContactPage/>}/>
    </Routes>
  )
}