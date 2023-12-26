import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
mongoose.connect(process.env.MONGO)
.then(() => {
    console.log('Connected to MongoDB!');
}).catch((err) => {
    console.log(err);
});


const app = express();

app.listen(7000, () => {
    console.log('Server running on port 7000!!!');
}
);