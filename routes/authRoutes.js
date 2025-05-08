import express from 'express';
import { register, login } from '../controllers/authController.js';
import { body } from 'express-validator';

const router = express.Router();

router.post(
  '/register',
  [
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
    body('name').notEmpty(),
    body('phone').notEmpty(),
  ],
  register
);

router.post('/login',
    [
        body('email').isEmail(),
        body('password').isLength({ min: 6 }),
    ],    
    login);

export default router;
