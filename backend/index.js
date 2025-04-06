// index.js
import dotenv from 'dotenv';
import connectDb from './config/database.js';
import userRouter from './routes/user.routes.js';
import messageRoute from './routes/message.routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express'
import { app, server } from './sockets/sockets.js'; 

dotenv.config();

const PORT = process.env.PORT || 8000;

const coreOptions = {
  origin: "http://localhost:5173",
  credentials: true,
}

app.use(cors(coreOptions));
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/user", userRouter);
app.use("/api/v1/message", messageRoute);


server.listen(PORT, () => {
  connectDb();
  console.log(`Server is running on http://localhost:${PORT}`);
});
