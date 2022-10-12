import { Router } from 'express'; 
import { check } from 'express-validator';
import { login,registerUser, renewToken,googleLogin } from '../../controllers/authController';
import { validateErrors } from '../../auth/middlewares/validate-errors';
import { isAuth } from '../middlewares/isAuth';

const router = Router();


router.get('/renew',isAuth,renewToken);
router.post(
    '/login/google',
    [
        check('id_token','El token es obligatorio').not().isEmpty(),
    ],
    validateErrors,
    googleLogin
)

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