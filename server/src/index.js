import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import authRoutes from './routes/authRoutes.js';
import topicRoutes from './routes/topicRoutes.js';
import sceneRoutes from './routes/sceneRoutes.js'; // must be created with Router({ mergeParams: true })
import actRoutes from './routes/actRoutes.js';     // must be created with Router({ mergeParams: true })

const app = express();

// Core middleware
app.use(express.json());
app.use(cors({ origin: process.env.CORS_ORIGIN || 'http://localhost:5173' })); // Authorization header only
app.use(morgan('dev'));

app.use('/api/auth', authRoutes);

// Topics
app.use('/api/topics', topicRoutes);

// get all Scenes  a topic (list/create)
app.use('/api/topics/:topicid/scenes', sceneRoutes);

// Scene-specific (optional details)

// Acts for a scene
app.use('/api/scenes/:sceneId/acts', actRoutes);

/** ---- Legacy aliases (optional; keeps your old frontend working while you migrate) ---- */
app.use('/api/gettopics', topicRoutes);   // GET /api/gettopics -> GET /api/topics
app.use('/api/posttopics', topicRoutes);  // POST /api/posttopics -> POST /api/topics
/** ------------------------------------------------------------------------------------- */

const PORT = Number(process.env.PORT) || 3000;
app.listen(PORT, () => console.log('running on ' + PORT));