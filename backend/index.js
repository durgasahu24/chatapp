import express from 'express';
const app = express();
import dotenv from 'dotenv';
import connectDb from './config/database.js';
import userRouter from './routes/user.routes.js'
import cookieParser from 'cookie-parser';
dotenv.config();


const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/user",userRouter)


app.listen(PORT, () => {
    connectDb();
    console.log(`server is running on port ${PORT}`)
})