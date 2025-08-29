import express from 'express';

import { getSceneCompleted, setSceneCompleted } from '../controllers/sceneController.js';


const router = express.Router({ mergeParams: true });

router.post('/:sceneid/completed', setSceneCompleted);
router.get('/:sceneid/completed', getSceneCompleted);

export default router;