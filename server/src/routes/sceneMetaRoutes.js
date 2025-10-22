import express from 'express';
import { requireAuth } from '../middleware/auth.js';

 import { post_user_scene_progress } from '../controllers/sceneController.js';


const router = express.Router({ mergeParams: true });

// router.post('/:sceneid/completed', requireAuth, setSceneCompleted);
router.get('/:sceneid/completed', requireAuth, post_user_scene_progress);

export default router;