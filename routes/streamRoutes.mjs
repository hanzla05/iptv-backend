import express from 'express';
import { createStream, getStreams, getStreamById, updateStream, deleteStream } from '../controllers/streamController.mjs';
import { authenticateToken } from '../middlewares/authMiddleware.mjs';

const router = express.Router();

router.post('/', authenticateToken, createStream);
router.get('/', getStreams);
router.get('/:id', getStreamById);
router.put('/:id', authenticateToken, updateStream);
router.delete('/:id', authenticateToken, deleteStream);

export default router;
