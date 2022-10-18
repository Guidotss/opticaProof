import { useDispatch, useSelector } from "react-redux"
import { opticaApi } from '../api'
import { loginWithGoogle } from "../auth/firebase/Provider";
import { checkingCredentials, clearErrorMessage, login, logOut } from "../store/auth/authSlice";


export const useAuthStore = () => {

    const dispatch = useDispatch(); 
    const { status, user, errorMessage } = useSelector((state) => state.auth);

    const startLogin = async ({ email, password }) => {

        dispatch(checkingCredentials()); 

        try{
            const { data } = await opticaApi.post('/auth/login', { email, password });
            console.log(data);
            if(data.ok){
                const {name, email, isAdmin, uid, token} = data; 
                localStorage.setItem('token',token);
                localStorage.setItem('token-init-date', new Date().getTime());
                dispatch(login({ displayName:name, email, isAdmin, uId:uid }));
            }

        }catch(error){

            const { data } = error.response; 

            if(data.message){
                dispatch(logOut({errorMessage:data.message}));
            }else{
                dispatch(logOut({errorMessage:data.errors}));
            }

            setTimeout(() => {
                dispatch(clearErrorMessage());
            },10);
        }
    }

    const startRegister = async({displayName, email ,password}) => {

        dispatch(checkingCredentials()); 

        try{
            const { data } = await opticaApi.post('/auth/register', { displayName, email, password });
            if(data.ok){
                dispatch(login({ email, password })); 
            }
        }catch(error){
            dispatch(logOut({errorMessage:error.response.data.message}));
        }

        setTimeout(() => {
            dispatch(clearErrorMessage());
        },10);
    }

    const checkAuthToken = async() => {
        const token = localStorage.getItem('token');
        
        if(!token){
            console.log('No hay token');
            dispatch(logOut());
        }

        try{

            const { data } = await opticaApi.get('/auth/renew');
            if(data.ok){

                localStorage.setItem('token',data.token);
                localStorage.setItem('token-init-date', new Date().getTime());
                dispatch(login({ displayName:data.name, email:data.email, isAdmin:data.isAdmin, uId:data.uid }));

            }


        }catch(error){
            console.log(error);
            localStorage.clear();
            dispatch(logOut());
        }
    }

    const startLogout = () => {
        localStorage.clear();
        dispatch(logOut());   
    }

    const startLoginWithGoogle = async() => {

        dispatch(checkingCredentials());
        try{
            const result = await loginWithGoogle();
            if(result.ok){
                const { displayName, email, uid, accessToken,providerId} = result; 
                const { data } = await opticaApi.post('/auth/login/google', { id_token:accessToken, name:displayName, providerId });
                
                if(data.ok){
                    localStorage.setItem('token',data.token);
                    localStorage.setItem('token-init-date', new Date().getTime());
                    dispatch(login({ displayName, email, isAdmin:data.isAdmin, uId:uid }));
                }else{
                    dispatch(logOut({errorMessage:data.message}));
                }
            }

        }catch(error){
            console.log(error);
            dispatch(logOut({errorMessage:error.message}));
        }
    }


    return{ 
        status,
        errorMessage,
        isAdmin: user.isAdmin,
        
        startLogin,
        startRegister,
        startLogout,
        startLoginWithGoogle,
        checkAuthToken
    }

}