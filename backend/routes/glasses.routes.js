import { Router } from 'express';
import { getAllGlasses,getGlassesById, createGlasses,updatedGlasses,deleteGlasses } from '../controllers/glassesControllers';
import { isAuth } from '../auth/middlewares/isAuth.js';

const router = Router();

router.get('/',getAllGlasses);
router.get('/:id', getGlassesById);
router.post('/createGlasses',isAuth, createGlasses);
router.put('/updateGlasses/:id',isAuth, updatedGlasses);
router.delete('/deleteGlasses/:id',isAuth, deleteGlasses);

export default router;
