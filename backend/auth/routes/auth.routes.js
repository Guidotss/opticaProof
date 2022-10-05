import { Router } from 'express'; 
import passport from 'passport';

const router = Router();


router.get('/login/facebook', passport.authenticate('facebook'));
router.get('/login/facebook/callback', passport.authenticate('facebook',{
    failureRedirect: '/login',
    session: false,
})); 

router.post('/signUp', passport.authenticate('SignUp', {
    failureRedirect: '/login',
    session: false,
    successRedirect: '/glasses',
})); 

router.post('/login', passport.authenticate('login', {
    failureRedirect: 'http://localhost:8080/glasses',
    session: false,
}),(req,res) => {
    const {token} = req.authInfo; 
    res.cookie('token', token, {httpOnly: true, secure: true});
    res.json({user: req.user, token: token});
});

export default router;