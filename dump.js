import express from 'express';
import { deleteFileById, getAllFiles, getFileById, updateFileById, uploadFile } from '../controllers/fileController.mjs';
import { authenticateToken } from '../middlewares/authMiddleware.mjs';
// import { upload } from '../middlewares/multerMiddleware.mjs';
import multer from 'multer';



const router = express.Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public");
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, uniqueSuffix + "-" + file.originalname.toLowerCase());
    },
  });
  
  const upload = multer({ storage: storage });

// router.post('/', authenticateToken, upload.single('image'), uploadFile);
router.post('/', authenticateToken, uploadFile);
router.get('/:id', authenticateToken, getFileById);
router.get('/', authenticateToken, getAllFiles);
router.put('/:id', authenticateToken, updateFileById);
router.delete('/:id', authenticateToken, deleteFileById);
export default router;


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

app.use(bodyparser.urlencoded([{ extended: true }]));
app.use("/public", express.static("public"))