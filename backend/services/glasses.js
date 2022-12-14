import mongoose from "mongoose";
import { glassesSchema } from '../models/glassesSchema.js';

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

    async getGlassesByName(glassesName){
        try{
            const glasses = await this.collection.find({name: glassesName}); 
            return glasses; 

        }catch(error){
            console.log(error); 
            throw new Error(`Error:${error}`); 
        }
    }

    async getGlassesById(id) {
        try{
            
            const glasses = await this.collection.findById(id);
            return glasses;

        }catch(err){
            console.log(err);
            throw new Error(`Error: ${err}`);
        }
    }
    
    async createGlasses(glasses) {
        try{
            if(JSON.stringify(glasses) === '{}'){
                throw new Error('Glasses is required');
            }
            const newGlasses = await this.collection.create(glasses);
            return newGlasses;
        }catch(err){
            console.log(err);
            throw new Error(`Error: ${err}`);
        }
    }

    async updateGlasses(id, glasses) {
        try{
            if(JSON.stringify(glasses) === '{}'){
                throw new Error('Glasses is required');
            }
            const updatedGlasses = await this.collection.findByIdAndUpdate(id, glasses, {new: true});
            return updatedGlasses;
        }catch(err){
            console.log(err);
            throw new Error(`Error: ${err}`);
        }
    }
    async deleteGlasses(id) {
        try{
            const deletedGlasses = await this.collection.findByIdAndDelete(id);
            return deletedGlasses;
        }catch(err){
            console.log(err);
            throw new Error(`Error: ${err}`);
        }
    }
}