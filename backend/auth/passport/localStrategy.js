import passport from 'passport';
import { Strategy } from 'passport-local';
import jwt from 'jsonwebtoken'; 
import User from '../../models/userModel';


const localStatregy = Strategy; 

passport.use( 'SignUp', new localStatregy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
}, async function (req,email,password,done){
    const user = await User.findOne({email: email});
    if(user){
        return done(null, false, {message: 'Email is already in use'});
    }else{
        const newUser = new User({
            displayName: req.body.displayName,
            email: req.body.email,
        });
        newUser.password = newUser.encryptPassword(password)
        await newUser.save();
        return done(null, newUser);
    }
})); 

passport.use('login', new localStatregy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
},async function(req,email,password,done){

    const currentUser = new User(); 
    const user = await User.findOne({email: email});

    if(!user || !currentUser.comparePassword( password, user.password )){
        console.log("no user");  
        return done(null, false, {message: 'Incorrect email or password'});
    }else{
        const token = jwt.sign({id: user._id,displayName:user.displayName}, `${process.env.JSON_WEB_TOKEN_SECRET}`, {expiresIn: 86400});
        
        return done(null, user, {token: token});
    }

})); 

passport.serializeUser(( user, done ) => {
    done(null, user.id);  
}); 

passport.deserializeUser(async(id,done) => {
    const user = await User.findById(id);
    done(null, user);
}); 