import connectDB from './config/db.js';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

import authRoutes from './routes/authRoutes.js';
import activityRoutes from './routes/activityRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
connectDB();


app.use('/api/auth', authRoutes);
app.use('/api/activities', activityRoutes);
app.use('/api/bookings', bookingRoutes);
app.get('/',(req,res)=>{
  res.status(200).send("Book Activity App");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
