import { Router } from 'express';
import { check } from 'express-validator';
import { getAllGlasses,getGlassesById, createGlasses,updatedGlasses,deleteGlasses } from '../controllers/glassesControllers';
import { isAuth } from '../auth/middlewares/isAuth.js';
import { validateErrors } from '../auth/middlewares/validate-errors.js';

const router = Router();

router.get('/',getAllGlasses);
router.get('/:id', getGlassesById);
router.post(
    '/createGlasses',
    [
        check('name', 'El nombre del anteojo es obligatorio').not().isEmpty(),
        check('brand', 'La marca del anteojo es obligatoria').not().isEmpty(),
        check('image', 'La imagen del anteojo es obligatoria').not().isEmpty(),
    ],
    validateErrors,
    isAuth, 
    createGlasses
);
router.put('/updateGlasses/:id',isAuth, updatedGlasses);
router.delete('/deleteGlasses/:id',isAuth, deleteGlasses);

export default router;
