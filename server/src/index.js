import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import authRoutes from './routes/authRoutes.js';
import actRoutes from './routes/actRoutes.js'
import topicRoutes from './routes/topicRoutes.js'
import sceneRoutes from './routes/sceneRoutes.js'

const app = express();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' })); // no credentials needed if using Authorization header
app.use(morgan('dev'));


app.use('/api/auth', authRoutes);

//topics
app.use('/api/gettopics', topicRoutes);
app.use('/api/posttopics', topicRoutes);

//scenes
app.use('/api/getscenes', sceneRoutes);
app.use('/api/postscenes', sceneRoutes);

//acts
//getallacts in a scene
app.use('/api/scenes/:sceneid/:actorder', actRoutes);
//get specific act in a scene 


const PORT = Number(process.env.PORT) || 3000;
app.listen(PORT, () => {
  console.log('running on ' + PORT);
});
