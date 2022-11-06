import { useDispatch, useSelector } from 'react-redux';
import { fileUpload } from '../helpers/fileUpload';
import { opticaApi } from '../api';
import { uploadGlasses,checkingGlasses,clearErrorMessage,errorUplodingGlasses, findGlassesById, getAllGlasses } from '../store/glasses/glassesSlice';

export const useAdminGlasses = () => {
    
    const dispatch = useDispatch();
    const { status, glasses, errorMessage } = useSelector( (state) => state.glasses );

    const startUploadingFile = async ( file=[] ) => {        
        try{
            const resp = await fileUpload( file );
            localStorage.setItem('glassesImage', JSON.stringify(resp));
        }catch(error){
            console.log(error);
        }
    }

    const startUploadingGlasses = async ( glasses ) => {

        dispatch( checkingGlasses() );
        const glassesImage = JSON.parse(localStorage.getItem('glassesImage'));
        if(!glassesImage) return dispatch( errorUplodingGlasses({errorMessage:'No image selected'}) );
        
        const newGlasses = {
            ...glasses,
            image: glassesImage
        }
        
        const token = localStorage.getItem('token');
        if(!token) return dispatch( errorUplodingGlasses('No token found') );
        
        try{ 
            const { data } = await opticaApi.post('glasses/createGlasses', newGlasses);
            if(data.ok){
                dispatch( uploadGlasses(data.newGlasses) );
                localStorage.removeItem('glassesImage');
            }
            
        }catch(error){
            console.log(error); 
            return dispatch( errorUplodingGlasses({errorMessage:error}) );
        }
    }
    
    const startGetAllGlasses = async () => {

        dispatch( checkingGlasses() );

        const token = localStorage.getItem('token');

        if(!token) return dispatch( errorUplodingGlasses('No token found') );

        try{

            const { data } = await opticaApi.get('/glasses');
            if(data.ok){
                dispatch( getAllGlasses(data.glasses) );
            }

        }catch(error){
            console.log(error); 
            return dispatch( errorUplodingGlasses({errorMessage:error}) );
        }

    }
    const startFindGlasses = async ( id ) => {
        dispatch( checkingGlasses() );

        const token = localStorage.getItem('token');
        if(!token) return dispatch( errorUplodingGlasses('No token found') );

        try{
            const {data} = await opticaApi.get(`/glasses/${id}`);
            dispatch( findGlassesById(data.glasses) );
            
        }catch(error){
            console.log(error);
            return dispatch( errorUplodingGlasses({errorMessage:error}) ); 
        }
    }

    return {
        status,
        glasses,
        errorMessage,

        startUploadingFile,
        startUploadingGlasses,
        startGetAllGlasses,
        startFindGlasses
    }
}