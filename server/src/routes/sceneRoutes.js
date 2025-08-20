import {getScenes, postScenes} from '../controllers/sceneController.js'

import express from 'express'

const router = express.Router({mergeParams: true});


router.get("/", getScenes);
router.post("/", postScenes);


export default router;