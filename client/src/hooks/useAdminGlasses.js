import { useDispatch, useSelector } from 'react-redux';
import { fileUpload } from '../helpers/fileUpload';
import { uploadGlasses,checkingGlasses,clearErrorMessage,errorUplodingGlasses } from '../store/glasses/glassesSlice';

export const useAdminGlasses = () => {
    
    const dispatch = useDispatch();
    const {status, glasses, errorMessage} = useSelector( (state) => state.glasses );

    const startUploadingFile = async ( file ) => {
        dispatch( checkingGlasses() );
        
        try{
            const resp = await fileUpload( file );
            console.log(resp);
        }catch(error){
            console.log(error);
        }
    }

    return {
        status,
        glasses,
        errorMessage,

        startUploadingFile
    }
}