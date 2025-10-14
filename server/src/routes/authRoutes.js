import express from 'express';

import { loginRoute, registerRoute, me } from '../controllers/authController.js';
import { requireAuth } from '../middleware/auth.js';
import { post_user_profile } from '../controllers/user_profileController.js';

//importing router from 
const router = express.Router();

             console.log("in authroutes ")

router.post('/register', registerRoute, post_user_profile);
router.post('/login', loginRoute); 
router.get('/me', requireAuth, me);

export default router;


