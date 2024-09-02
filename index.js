import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; 
import authRoutes from './routes/authRoutes.mjs';
import genreRoutes from './routes/genreRoutes.mjs';
import seriesRoutes from './routes/seriesRoutes.mjs';
import seasonRoutes from './routes/seasonRoutes.mjs';
import episodeRoutes from './routes/episodeRoutes.mjs';
import streamRoutes from './routes/streamRoutes.mjs';
import fileRoutes from './routes/fileRoutes.mjs';
dotenv.config();

const app = express();

connectDB();
app.use(cors()); 
app.use(express.json()); 


app.get("/", (req, res)=>{
    res.send("Hello");
})

app.use('/api/auth', authRoutes);
app.use('/api/files', fileRoutes);
app.use('/api/genres', genreRoutes);
app.use('/api/series', seriesRoutes);
app.use('/api/seasons', seasonRoutes);
app.use('/api/episodes', episodeRoutes);
app.use('/api/streams', streamRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


