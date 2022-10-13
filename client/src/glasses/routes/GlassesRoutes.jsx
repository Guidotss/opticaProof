import { Routes, Route } from 'react-router-dom';
import { HomePage, SunGlassesPage,ContactologiaPage,ContactPage } from '../pages'


export const GlassesRoutes = () => {
  return (
    <Routes>
        <Route path='/inicio' element={<HomePage/>}/>
        <Route path='lentesdesol' element={<SunGlassesPage/>}/>
        <Route path='/contactologia' element={<ContactologiaPage/>}/>
        <Route path='/contacto' element={<ContactPage/>}/>
    </Routes>
  )
}