import express from 'express';
import { deleteFileById, getAllFiles, getFileById, updateFileById, uploadFile } from '../controllers/fileController.mjs';
import { authenticateToken } from '../middlewares/authMiddleware.mjs';


const router = express.Router();

router.post('/', authenticateToken, uploadFile);
router.get('/:id', authenticateToken, getFileById);
router.get('/', authenticateToken, getAllFiles);
router.put('/:id', authenticateToken, updateFileById);
router.delete('/:id', authenticateToken, deleteFileById);

export default router;
