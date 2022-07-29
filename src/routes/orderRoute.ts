import { Router } from 'express';
import orderController from '../controllers/orderController';

const router = Router();

router.route('/')
  .get(orderController.getAll);

export default router;