import mongoose from "mongoose";


export const glassesSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,

});


