import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyparser from "body-parser"
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
app.use("/public", express.static("public"))
connectDB();

app.use(cors()); 
app.use(express.json()); 
app.use(bodyparser.urlencoded([{ extended: true }]));


app.get("/", (req, res)=>{
    res.send("Hello");
})

app.use('/api/auth', authRoutes);
app.use('/api/genres', genreRoutes);
app.use('/api/series', seriesRoutes);
app.use('/api/seasons', seasonRoutes);
app.use('/api/episodes', episodeRoutes);
app.use('/api/streams', streamRoutes);
app.use('/api/files', fileRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// import express from 'express';
// import multer from 'multer';

// const app = express();
// const upload = multer({ dest: 'uploads/' });

// app.post('/upload', upload.single('file'), (req, res) => {
//   res.json({ file: req.file });
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });
