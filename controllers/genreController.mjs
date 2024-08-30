import Genre from '../models/genreModel.mjs';

export const createGenre = async (req, res) => {
  try {
    const { name,description } = req.body;

    const genre = new Genre({ name ,description});
    await genre.save();

    res.status(201).json(genre);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const getGenres = async (req, res) => {
  try {
    const genres = await Genre.find();
    res.status(200).json(genres);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const getGenreById = async (req, res) => {
  try {
    const genre = await Genre.findById(req.params.id);
    if (!genre) return res.status(404).json({ error: 'Genre not found' });

    res.status(200).json(genre);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const updateGenre = async (req, res) => {
  try {
    const { name } = req.body;
    const genre = await Genre.findByIdAndUpdate(req.params.id, { name }, { new: true });

    if (!genre) return res.status(404).json({ error: 'Genre not found' });

    res.status(200).json(genre);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const deleteGenre = async (req, res) => {
  try {
    const genre = await Genre.findByIdAndDelete(req.params.id);
    if (!genre) return res.status(404).json({ error: 'Genre not found' });

    res.status(200).json({ message: 'Genre deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
