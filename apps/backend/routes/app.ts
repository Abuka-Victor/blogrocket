import express from 'express';
import { AuthController } from '../controllers/AuthController';
import UserController from '../controllers/UserController';
import requireAuth from '../middlewares/auth';

const router = express.Router();

router.post('/login', AuthController.login);
router.post('/signup', AuthController.signup);
router.post('/verify', AuthController.verifyMail);
router.delete('/logout', requireAuth, AuthController.logout);

router.get('/me', requireAuth, UserController.me);

export default router;