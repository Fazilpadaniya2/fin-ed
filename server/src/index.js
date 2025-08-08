import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import authRoutes from './routes/authRoutes.js';

const app = express();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' })); // no credentials needed if using Authorization header
app.use(morgan('dev'));

app.get('/health', (_req, res) => res.send('ok'));

app.use('/api/auth', authRoutes);

const PORT = Number(process.env.PORT) || 3000;
app.listen(PORT, () => {
  console.log('running on ' + PORT);
});
