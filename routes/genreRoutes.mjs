import express from 'express';
import { createGenre, getGenres, getGenreById, updateGenre, deleteGenre } from '../controllers/genreController.mjs';
import { authenticateToken } from '../middlewares/authMiddleware.mjs';

const router = express.Router();

router.post('/', authenticateToken, createGenre);
router.get('/', getGenres);
router.get('/:id', getGenreById);
router.put('/:id', authenticateToken, updateGenre);
router.delete('/:id', authenticateToken, deleteGenre);

export default router;
