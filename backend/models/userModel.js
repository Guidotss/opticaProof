import mongoose from "mongoose";


export const userSchema = new mongoose.Schema({
    displayName: {
        type: String,
        required :true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    image:{
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false,
        required: true,
    },
}); 



