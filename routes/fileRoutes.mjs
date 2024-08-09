import express from 'express';
import { uploadFile, getFileById, deleteFile } from '../controllers/fileController.mjs';
import { authenticateToken } from '../middlewares/authMiddleware.mjs';
import { upload } from '../middlewares/multerMiddleware.mjs';

const router = express.Router();

router.post('/', authenticateToken, upload.single('file'), uploadFile);
router.get('/:id', getFileById);
router.delete('/:id', authenticateToken, deleteFile);

export default router;
