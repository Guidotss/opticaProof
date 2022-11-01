import { useDispatch, useSelector } from 'react-redux';
import { fileUpload } from '../helpers/fileUpload';
import { opticaApi } from '../api';
import { uploadGlasses,checkingGlasses,clearErrorMessage,errorUplodingGlasses } from '../store/glasses/glassesSlice';

export const useAdminGlasses = () => {
    
    const dispatch = useDispatch();
    const {status, glasses, errorMessage} = useSelector( (state) => state.glasses );

    const startUploadingFile = async ( file=[] ) => {
        dispatch( checkingGlasses() );
                
        try{
            const resp = await fileUpload( file );
            localStorage.setItem('glassesImage', JSON.stringify(resp));
        }catch(error){
            console.log(error);
            
        }
    }

    const startUploadingGlasses = async ( glasses ) => {

        const glassesImage = JSON.parse(localStorage.getItem('glassesImage'));
        if(!glassesImage) return dispatch( errorUplodingGlasses('No image selected') );
        
        const newGlasses = {
            ...glasses,
            image: glassesImage
        }
        
        const token = localStorage.getItem('token');
        if(!token) return dispatch( errorUplodingGlasses('No token found') );
        
        try{
            
            const { data } = await opticaApi.post('glasses/createGlasses', newGlasses);
            dispatch( checkingGlasses() );

            if(data.ok){
                dispatch( uploadGlasses(data.newGlasses) );
            }
            
        }catch(error){
            console.log(error); 
            dispatch( errorUplodingGlasses(error.message) );  
        }
    }
    

    return {
        status,
        glasses,
        errorMessage,

        startUploadingFile,
        startUploadingGlasses
    }
}