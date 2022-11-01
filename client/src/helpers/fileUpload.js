import { getEnvVariables } from './getEnvVariables';
import axios from 'axios';

export const fileUpload = async (file={}) => {

    

    if(!file) throw new Error('No file selected');

    const { VITE_CLOUDINARY_URL } = getEnvVariables();

    const formData = new FormData();
    formData.append('upload_preset', 'opticaProof');
    formData.append('file', file);

    try {

        const { data, statusText } = await axios.post(VITE_CLOUDINARY_URL, formData);
        
        if(statusText !== 'OK') throw new Error('Error uploading file');

        return data.url;

    }catch(error){
        console.log(error);
        throw new Error(error.message);
    }

}