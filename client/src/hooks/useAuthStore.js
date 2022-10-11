import { useDispatch, useSelector } from "react-redux"
import { opticaApi } from '../api'
import { checkingCredentials, login, logOut } from "../store/auth/authSlice";


export const useAuthStore = () => {
    const dispatch = useDispatch(); 
    const { status, user, errorMessage } = useSelector((state) => state.auth);

    const startLogin = async ({ email, password }) => {
        dispatch(checkingCredentials()); 
        try{
            const { data } = await opticaApi.post('/auth/login', { email, password });
            if(data.ok){
                const {name, email, isAdmin, uid, token} = data; 
                localStorage.setItem('token',token);
                localStorage.setItem('token-init-date', new Date().getTime());
                dispatch(login({displayName:name, email, isAdmin, uId:uid, token}));
            }

        }catch(error){
            const {errors} = error.response.data; 
            dispatch(logOut({errorMessage:errors})); 
        }
    }

    


    return{ 
        status,
        
        startLogin
    }

}