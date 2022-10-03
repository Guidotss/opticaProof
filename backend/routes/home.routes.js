import { Router } from 'express';
import { getAllGlasses,getGlassesById } from '../controllers/glassesControllers';

const router = Router();

router.get('/', getAllGlasses);
router.get('/:id', getGlassesById);

export default router;
