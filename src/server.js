import express, { json } from 'express';

const app = express();

// Router
import IndexRouter from './routes/index.routes'
import TaskRoutes from './routes/task.routes'


//Settings
app.set('port', process.env.PORT || 5200);

// Middlewares
app.use(json());

app.use(IndexRouter);
app.use('/task', TaskRoutes);

export default app; 