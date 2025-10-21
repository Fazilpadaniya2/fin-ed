import express from 'express'
import { getTopics } from '../controllers/topicController.js';
import { postTopics, post_user_topics_progress } from '../controllers/topicController.js';

const router = express.Router();

router.get("/", getTopics);
router.post("/", postTopics)
router.post("/:userId/:topicId/continue", post_user_topics_progress)

export default router;