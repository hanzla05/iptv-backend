import express from 'express';
import { createSeries, getSeries, getSeriesById, updateSeries, deleteSeries } from '../controllers/seriesController.mjs';
import { authenticateToken } from '../middlewares/authMiddleware.mjs';

const router = express.Router();

router.post('/', authenticateToken, createSeries);
router.get('/', getSeries);
router.get('/:id', getSeriesById);
router.put('/:id', authenticateToken, updateSeries);
router.delete('/:id', authenticateToken, deleteSeries);

export default router;
