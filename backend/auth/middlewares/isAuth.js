/* eslint-disable no-undef */
import jwt from 'jsonwebtoken';
import { User  } from '../../services/user';
import dotenv from 'dotenv';
dotenv.config();

export const isAuth = async(req, res, next) => {

    const user = new User();

    const token = req.header('x-token');

    if(!token) {

        return res.status(401).json({
            ok: false,
            msg: 'does not exist token in the request'
        });

    }else{
        try {

            const decodedToken = jwt.verify(token, process.env.JSON_WEB_TOKEN_SECRET);
            const { id,name,providerId } = decodedToken; 

            if(providerId === 'firebase'){
                req.uid = id;
                req.name = name;
                req.providerId = providerId;
                console.log(providerId);
                next();
            }else{

                const userFound = await user.getUserbyId(id);
                if(!userFound){
                    return res.status(401).json({
                        ok: false,
                        message: 'Token is missing or invalid'
                    }); 
                }
            }
            
        } catch (error) {
            return res.status(401).json({
                ok: false,
                msg: 'Token is not valid'
            });
        }
    }

    next();
}