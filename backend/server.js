import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'
import cors from 'cors';

//configure..
dotenv.config();

// database config
connectDB();

//rest Object..
const app = express();

// MiddleWares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'))

//Routes ..
app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/category",categoryRoutes);
app.use("/api/v1/product",productRoutes)

//rest api..

app.get('/',(req,res)=>{
    res.send("<h1>Welcome to Ecommerce app </h1>");
});

//PORT..
const PORT = process.env.PORT || 8080;

//server listen..
app.listen(PORT,()=>{
    console.log(`Server is running on ${process.env.DEV_MODE} on Port ${PORT}`.bgCyan.white)
});
