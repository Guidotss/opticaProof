import { Router } from 'express';
import { getAllGlasses,getGlassesById, createGlasses,updatedGlasses,deleteGlasses } from '../controllers/glassesControllers';

const router = Router();

router.get('/', getAllGlasses);
router.get('/:id', getGlassesById);
router.post('/createGlasses', createGlasses);
router.put('/updateGlasses/:id', updatedGlasses);
router.delete('/deleteGlasses/:id', deleteGlasses);

export default router;
