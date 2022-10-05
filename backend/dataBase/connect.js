/* eslint-disable no-undef */
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
        process.exit(1); 
    }
}

DB_CONNECT();