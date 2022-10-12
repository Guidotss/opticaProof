import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'; 
import { fireBaseAuth } from './config';


const googleProvider = new GoogleAuthProvider();

export const loginWithGoogle = async() => {
    try{
        const result = await signInWithPopup(fireBaseAuth, googleProvider);
        const { displayName, email, uid, accessToken,providerId } = result.user;

        
        return { 
            ok: true,
            displayName, 
            email, 
            accessToken,
            uid,
            providerId
        }

    }catch(error){
        console.log(error);
        return{
            ok: false,
            error: error.message
        }
    }
}