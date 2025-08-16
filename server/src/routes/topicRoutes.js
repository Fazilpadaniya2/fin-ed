import express from 'express'
import { getTopics } from '../controllers/topicController.js';
import { postTopics } from '../controllers/topicController.js';

const router = express.Router();

router.get("/", getTopics);
router.post("/", postTopics)

export default router;