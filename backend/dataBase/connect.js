import mongoose from 'mongoose';
import { DB_CONFIG } from './config.js';

export const DB_CONNECT = () => {
    try{
        mongoose.connect(DB_CONFIG.urlAtlas,DB_CONFIG.options)
            .then(() => {
                console.log('Database connected');
            })
            .catch((error) => {
                console.log(error);
            })

    }catch(err){
        console.log(err);
        // eslint-disable-next-line no-undef
        process.exit(1); 
    }
}

DB_CONNECT();