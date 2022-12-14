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

            const token = jwt.sign({ id: newUser._id, name:newUser.displayName, isAdmin:newUser.isAdmin }, process.env.JSON_WEB_TOKEN_SECRET, {
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
        if(!userFound){
            return res.status(401).json({message: 'Invalid credentials'});
        }else{
            const token = jwt.sign({id: userFound._id, name:userFound.displayName, isAdmin:userFound.isAdmin }, process.env.JSON_WEB_TOKEN_SECRET, {
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

export const googleLogin = async(req,res) => {
    const { idToken, displayName,providerId } = req.body;

    try{
        const token = jwt.sign({id: idToken, name:displayName, providerId }, process.env.JSON_WEB_TOKEN_SECRET, {
            expiresIn: 60 * 60 * 24
        });
        return res.status(200).json({
            ok: true,
            message: 'User logged in',
            token,
            
        });

    }catch(error){
        return res.status(500).json({
            ok: false,
            message: 'Unexpected error'
        });
    }

}

export const renewToken = async(req,res) => {
    
    try{

        const { uid,name,isAdmin } = req;
        
        if(req.providerId !== undefined){
            const token = jwt.sign({ id: uid, name,providerId:req.providerId }, process.env.JSON_WEB_TOKEN_SECRET, {
                expiresIn: 60 * 60 * 24
            });
            return res.status(200).json({
                ok: true,
                message: 'Token renewed',
                uid,
                name,
                token
            });
        }else{
            const token = jwt.sign({ id: uid, name, isAdmin }, process.env.JSON_WEB_TOKEN_SECRET, {
                expiresIn: 60 * 60 * 24
            });
            return res.status(200).json({
                ok: true,
                message: 'Token renewed',
                uid,
                name,
                isAdmin,
                token
            });
        }
        
        
        
    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: 'Unexpected error'
        })
    }
}