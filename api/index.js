import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
dotenv.config();

mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());

app.listen(7000, () => {
  console.log('Server running on port 7000!!!');
});

// Fix: Add a leading slash before "api/user"
app.use("/api/user", userRouter);
// Fix: Add a leading slash before "api/user"
app.use("/api/auth", authRouter);