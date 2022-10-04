import mongoose from "mongoose";


export const glassesSchema = new mongoose.Schema({
    model: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
        required: true,
    },

});


