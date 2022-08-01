import { Router } from 'express';
import loginController from '../controllers/loginController';

const router = Router();

router.route('/')
  .post(loginController.login);

export default router;