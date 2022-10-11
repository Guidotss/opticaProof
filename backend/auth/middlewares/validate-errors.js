import { validationResult } from 'express-validator';


export const validateErrors = (req, res, next) => {
    const errors = validationResult(req);
    if(!validationResult(req).isEmpty()){
        return res.status(400).json({
            errors: errors.mapped()
        }); 
    }else{
        next(); 
    }
}