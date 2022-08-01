import express from 'express';
import 'express-async-errors';

import productRoute from './routes/productRoute';
import userRoute from './routes/userRoute';
import orderRoute from './routes/orderRoute';
import loginRoute from './routes/loginRoute';
import erroHandler from './middleware/erroHandler';

const app = express();

app.use(express.json());

app.use('/products', productRoute);
app.use('/users', userRoute);
app.use('/orders', orderRoute);
app.use('/login', loginRoute);

app.use(erroHandler);

export default app;
