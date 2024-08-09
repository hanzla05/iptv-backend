import express from 'express';
import { createEpisode, getEpisodes, getEpisodeById, updateEpisode, deleteEpisode } from '../controllers/episodeController.mjs';
import { authenticateToken } from '../middlewares/authMiddleware.mjs';

const router = express.Router();

router.post('/', authenticateToken, createEpisode);
router.get('/', getEpisodes);
router.get('/:id', getEpisodeById);
router.put('/:id', authenticateToken, updateEpisode);
router.delete('/:id', authenticateToken, deleteEpisode);

export default router;
