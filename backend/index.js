import express from 'express';
const app = express();
import dotenv from 'dotenv';
import connectDb from './config/database.js';
import userRouter from './routes/user.routes.js'
import cookieParser from 'cookie-parser';
import messageRoute from './routes/message.routes.js'
import cors from 'cors'
dotenv.config();


const PORT = process.env.PORT || 8000;


const coreOptions = {
    origin:"http://localhost:5173",
    credentials:true
}

app.use(cors(coreOptions))
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/user", userRouter);
app.use("/api/v1/message", messageRoute);


app.listen(PORT, () => {
    connectDb();
    console.log(`server is running on port ${PORT}`)
})