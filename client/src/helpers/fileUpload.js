import { getEnvVariables } from './getEnvVariables';
import axios from 'axios';

export const fileUpload = async (file=[]) => {


    if(!file) throw new Error('No file selected');

    const { VITE_CLOUDINARY_URL } = getEnvVariables();

    const formData = new FormData();
    formData.append('upload_preset', 'opticaProof');    
    formData.append('file', file);

    console.log(formData);

    try {

        const resp  = await axios.post(VITE_CLOUDINARY_URL, formData);

        console.log(resp);

        if(!resp.ok) throw new Error('Error uploading file');

        return resp.data.secure_url;


    }catch(error){
        console.log(error);
        throw new Error(error.message);
    }

}