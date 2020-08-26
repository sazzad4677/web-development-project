import express from 'express';
<<<<<<< HEAD
import data from './data.js';
import dotenv from 'dotenv';
import config from './config.js';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoute.js';

import path from 'path';
import productRoute from './routes/productRoute';


dotenv.config();

const mongodbUrl = config.MONGODB_URL;

mongoose.connect(mongodbUrl,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex: true

}).catch(error => console.log(error.reason));

const app = express();
app.use(bodyParser.json());
app.use("/api/users", userRoute);
=======
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import config from './config.js';
import userRoute from './routes/userRoute.js';
import productRoute from './routes/productRoute.js';

>>>>>>> 280223cbf44d8584d51381df36eb75491341c756

const mongodbUrl = config.MONGODB_URL;
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log(error.reason));

const app = express();
app.use(bodyParser.json());

app.use('/api/users', userRoute);
app.use('/api/products', productRoute);

app.listen (5000, () => {console.log("Server started at http://localhost:5000")})