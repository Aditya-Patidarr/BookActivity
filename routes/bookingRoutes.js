import express from 'express';
import { bookActivity, getMyBookings } from '../controllers/bookingController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, bookActivity);
router.get('/mybookings', authMiddleware, getMyBookings);

export default router;
