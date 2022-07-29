import express from 'express';
import 'express-async-errors';

import productRoute from './routes/productRoute';
import userRoute from './routes/userRoute';

const app = express();

app.use(express.json());

app.use('/products', productRoute);
app.use('/users', userRoute);

export default app;
