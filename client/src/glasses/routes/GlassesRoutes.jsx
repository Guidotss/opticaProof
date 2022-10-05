import { Routes, Route } from 'react-router-dom';
import { GlassesPage } from '../pages/GlassesPage'

export const GlassesRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<GlassesPage/>}/>
    </Routes>
  )
}