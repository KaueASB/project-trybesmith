import { Router } from 'express';
import orderController from '../controllers/orderController';
// import tokenMiddleware from '../middleware/tokenMiddleware';

const router = Router();

router.route('/')
  .get(orderController.getAll);
// .post(tokenMiddleware, orderController.create);

export default router;
