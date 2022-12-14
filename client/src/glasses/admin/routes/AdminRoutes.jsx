import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from '../../../hooks';
import { AllGlassesAdminPage,DeleteGlassesAdminPage,EditGlassesAdminPage,NewGlassesAdminPage,GlassesAdminPage } from '../pages'

export const AdminRoutes = () => {

    const { status,isAdmin,checkAuthToken,checkAdminCredentials } = useAuthStore();

    if(!isAdmin ||status === 'not-authenticated' ) return <Navigate to='/' />

    return(
        <Routes>
            <Route path='/todoslosanteojos' element={<AllGlassesAdminPage/>}/>
            <Route path='/agregaranteojos' element={<NewGlassesAdminPage/>}/>
            <Route path='/editaranteojos' element={<EditGlassesAdminPage/>}/>
            <Route path='/eliminaranteojos' element={<DeleteGlassesAdminPage/>}/>
            <Route path='/glasses/:id' element={<GlassesAdminPage/>}/>
            <Route path='/optica' element={<Navigate to='/optica'/>}/>
        </Routes>
    )
}