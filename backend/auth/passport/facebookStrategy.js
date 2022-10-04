import passport from 'passport';
import { Strategy } from 'passport-facebook'; 
import User from '../../models/userModel';
import dotenv from 'dotenv';
dotenv.config(); 

const facebookStrategy = Strategy;

passport.use(new facebookStrategy({
    // eslint-disable-next-line no-undef
    clientID:`${process.env.facebook_app_id}`,
    // eslint-disable-next-line no-undef
    clientSecret:`${process.env.facebook_app_secret}`,
    callbackURL:'http://localhost:8080/auth/login/facebook/callback',
    profileFields: ['id', 'displayName', 'photos', 'email'],
},async function(accestoken,refreshToken,profile,done){
    const user = await User.findOne({facebookId: profile.id});

    if(user){
        return done(null,user);
    }else{
        const newUser = new User({

            facebookId: profile.id,
            displayName: profile.displayName,
            email: profile.emails[0].value,
            image: profile.photos[0].value,
            providers:{
                facebook: {
                    id: profile.id,
                    accestoken: accestoken,
                },
            }    
        }); 
        await newUser.save();
        done(null, newUser);
    }
    
})); 

passport.serializeUser(( user, done ) => {
    done(null, user.id);  
});

passport.deserializeUser(async(id,done) => {
    const user = await User.findById(id);
    done(null, user);
});