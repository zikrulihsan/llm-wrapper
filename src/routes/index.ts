import { Router } from 'express';
import healthRoutes from './health.routes';

const router = Router();

router.use('/', healthRoutes);

// Add more routes here as your application grows
// router.use('/users', userRoutes);
// router.use('/auth', authRoutes);

export default router;
