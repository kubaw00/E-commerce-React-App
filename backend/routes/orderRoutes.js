import express from 'express';
import { getOrderItems } from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();

router.route('/').post(protect, getOrderItems);

export default router;
