import express from 'express';

import { loginRoute, registerRoute, me } from '../controllers/authController.js';
import { requireAuth } from '../middleware/auth.js';

//importing router from 
const router = express.Router();


router.post('/register', registerRoute);
router.post('/login', loginRoute);
router.get('/me', requireAuth, me);

export default router;


