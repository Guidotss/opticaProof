/* eslint-disable no-undef */
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../services/user'; 
dotenv.config();

const user = new User(); 



export const registerUser = async(req,res) => {
    const { displayName, password, email } = req.body;

    try{

        const newUser = await user.registerUser(displayName, email, password);
        if(!newUser){
            return res.status(400).json({
                ok: false,
                msg: 'User already exists'
            });
        }else{

            const token = jwt.sign({id: newUser._id}, process.env.JSON_WEB_TOKEN_SECRET, {
                expiresIn: 60*60*24
            }); 
            return res.status(201).json({
                ok: true,
                msg: 'User created',
                uid: newUser.id,
                name: newUser.displayName,
                token
            });
        }



    }catch(error){
        return res.status(500).json({
            ok:false,
            msg: 'Unexpected error'
        });
    }
}

export const login = async(req,res) => {

    const { email,password } = req.body;

    try{
        
        const userFound = await user.login(email,password);

        if(userFound == false){
            return res.status(401).json({message: 'Invalid credentials'});
        }else{
            const token = jwt.sign({id: userFound._id}, process.env.JSON_WEB_TOKEN_SECRET, {
                expiresIn: 60 * 60 * 24
            });
            return res.status(200).json({
                ok: true,
                message: 'User logged in',
                isAdmin: userFound.isAdmin,
                uid: userFound._id,
                name:userFound.displayName,
                email,
                token
            });
        }

    }catch(error){
        return res.status(500).json({
            ok: false,
            message: 'Unexpected error'
        });
    }
    
}