/* eslint-disable no-undef */
import jwt from 'jsonwebtoken';
import User from '../../models/userModel.js';


export const isAuth = async(req, res, next) => {
    
    const auth = req.get('Authorization');
    let token = '';
    if(auth && auth.toLowerCase().startsWith('bearer ')){
        token = auth.substring(7);
    }
    if(!token){
        return res.status(401).json({error: 'Token missing or invalid'});
    }
    const decodedToken = jwt.verify(token, `${process.env.JSON_WEB_TOKEN_SECRET}`);
    if(!decodedToken.id){
        return res.status(401).json({error: 'Token missing or invalid'});
    }

    const user = await User.findById(decodedToken.id);
    
    if(!user){
        return res.status(401).json({error: 'Token missing or invalid'});
    }else if(user.isAdmin === false){
        return res.status(401).json({error: 'Unauthorized'});
    }

    next();
}