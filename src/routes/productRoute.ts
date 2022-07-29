import { Router } from 'express';
import ProductController from '../controllers/productController';

const router = Router();

const prodController = new ProductController();

router.route('/')
  .post(prodController.create)
  .get(prodController.getAll);

export default router;