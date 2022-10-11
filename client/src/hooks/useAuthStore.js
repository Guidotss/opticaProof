import { useDispatch, useSelector } from "react-redux"
import { opticaApi } from '../api'
import { checkingCredentials } from "../store/auth/authSlice";


export const useAuthStore = () => {
    const dispatch = useDispatch(); 
    const { status, user, errorMessage } = useSelector((state) => state.auth);

    const startLogin = async ({ email, password }) => {
        dispatch(checkingCredentials()); 
        try{
            const resp = await opticaApi.post('/auth/login', { email, password });
            console.log(resp);
        }catch(error){
            console.log(error);
        }
    }

    


    return{ 
        status,
        
        startLogin
    }

}