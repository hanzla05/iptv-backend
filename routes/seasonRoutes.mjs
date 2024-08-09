import express from 'express';
import { createSeason, getSeasons, getSeasonById, updateSeason, deleteSeason } from '../controllers/seasonController.mjs';
import { authenticateToken } from '../middlewares/authMiddleware.mjs';

const router = express.Router();

router.post('/', authenticateToken, createSeason);
router.get('/', getSeasons);
router.get('/:id', getSeasonById);
router.put('/:id', authenticateToken, updateSeason);
router.delete('/:id', authenticateToken, deleteSeason);

export default router;
