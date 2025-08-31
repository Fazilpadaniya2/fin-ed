import express from 'express';
import { requireAuth } from '../middleware/auth.js';

import { getSceneCompleted, setSceneCompleted } from '../controllers/sceneController.js';


const router = express.Router({ mergeParams: true });

router.post('/:sceneid/completed', requireAuth, setSceneCompleted);
router.get('/:sceneid/completed', requireAuth, getSceneCompleted);

export default router;