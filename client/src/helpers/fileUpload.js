import { getEnvVariables } from './getEnvVariables';
import axios from 'axios';

export const fileUpload = async (file=[]) => {


    if(!file) throw new Error('No file selected');

    const { CLOUDINARY_URL } = getEnvVariables();

    const formData = new FormData();
    formData.append('upload_preset', 'opticaProof');    
    formData.append('file', file);
    
    try {

        const resp  = await axios.post(CLOUDINARY_URL, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }   
        });

        console.log(resp);

        if(!resp.ok) throw new Error('Error uploading file');

        return resp.data.secure_url;


    }catch(error){
        console.log(error);
        throw new Error(error.message);
    }

}