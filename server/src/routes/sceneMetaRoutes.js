import express from 'express';

import { setSceneCompleted } from '../controllers/sceneController.js';


const router = express.Router({ mergeParams: true });

router.post('/:sceneid/completed', setSceneCompleted);

export default router;