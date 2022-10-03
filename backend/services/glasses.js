import mongoose from "mongoose";
import { glassesSchema } from '../models/glassesModel.js';

export class Glasses {
    constructor() {
        this.collection = mongoose.model('glasses', glassesSchema);
    }

    async getAllGlasses() {
        try{

            const glasses = this.collection.find(); 
            return glasses; 
        
        }catch(err){

            console.log(err);
            throw new Error(`Error: ${err}`); 
            
        }
    }
}