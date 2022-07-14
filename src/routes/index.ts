import { Router } from 'express';
import { categoriesRoutes } from './category.routes';
import { specificationRoutes } from './specification.routes';

const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/specifications', specificationRoutes);

export { router };
