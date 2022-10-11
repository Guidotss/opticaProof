import { Router } from 'express'; 
import passport from 'passport';
import { check } from 'express-validator';
import { login,registerUser } from '../../controllers/authController';
import { validateErrors } from '../../auth/middlewares/validate-errors';

const router = Router();

router.get('/login/facebook', passport.authenticate('facebook'));
router.get('/login/facebook/callback', passport.authenticate('facebook',{
    failureRedirect: '/login',
    session: false,
})); 

router.post(
    '/register',
    [
        check('displayName', 'Name is required').not().isEmpty(),
        check('displayName', 'Name must be at least 3 characters').isLength({min: 3}),
        check('email', 'Email is required').isEmail(),
        check('password', 'Password is required').not().isEmpty(),
        check('password', 'Password must be at least 6 characters').isLength({min: 6}), 
    ],
    validateErrors,
    registerUser
)


router.post(
    '/login',
    [
        check('email', 'Email is required').isEmail(),
        check('password', 'Password is required').not().isEmpty(),

    ],
    validateErrors,
    login
)


export default router;