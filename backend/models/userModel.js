import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
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

userSchema.methods.encryptPassword =  ( password ) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

userSchema.methods.comparePassword = ( password, hash ) => {
    return bcrypt.compareSync(password, hash);
}


const User = mongoose.model( "User", userSchema );

export default User;


