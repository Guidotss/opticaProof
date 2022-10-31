import { getEnvVariables } from './getEnvVariables';
import axios from 'axios';

export const fileUpload = async (file={}) => {

    console.log(file)

    if(!file) throw new Error('No file selected');

    const { CLOUDINARY_URL } = getEnvVariables();

    const formData = new FormData();
    formData.append('upload_preset', 'opticaProof');
    formData.append('file', file);
    
    try {

        console.log(formData); 
        const resp  = await fetch(CLOUDINARY_URL, {
            method: 'POST',
            body: formData
        })
        console.log(resp);

        
        if(!resp.ok) throw new Error('Error uploading file');

        return resp.secure_url;

        


    }catch(error){
        console.log(error);
        throw new Error(error.message);
    }

}