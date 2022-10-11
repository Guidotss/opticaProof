import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { userSchema } from '../models/userModel'; 


export class User{
    constructor(){
        this.collection =  mongoose.model('User', userSchema);
    }

    #encryptPassword(password){
        return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    }

    #comparePassword(password, hash){
        return bcrypt.compareSync(password, hash);
    }


    async registerUser( displayName, email, password ){
        try{
            const user = await this.collection.findOne({email});
            if(user){
                return false;
            }

            const newUser = new this.collection({
                displayName,
                email,
                password: this.#encryptPassword(password)
            });

            return await newUser.save();


        }catch(error){
            console.log(error);
            throw new Error('Unexpected error');
        }
    }

    async login( email, password ){
        try{
            const user = await this.collection.findOne({email},);
            if(!user || !this.#comparePassword(password, user.password)){
                return false;
            }

            return user;

        }catch(error){
            console.log(error);
            throw new Error('Unexpected error');
        }
    }
}