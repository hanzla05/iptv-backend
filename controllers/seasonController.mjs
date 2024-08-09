import Season from '../models/seasonModel.mjs';

export const createSeason = async (req, res) => {
  try {
    const { series_id, name, description } = req.body;

    const season = new Season({ series_id, name, description });
    await season.save();

    res.status(201).json(season);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const getSeasons = async (req, res) => {
  try {
    const seasons = await Season.find().populate('series_id');
    res.status(200).json(seasons);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const getSeasonById = async (req, res) => {
  try {
    const season = await Season.findById(req.params.id).populate('series_id');
    if (!season) return res.status(404).json({ error: 'Season not found' });

    res.status(200).json(season);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const updateSeason = async (req, res) => {
  try {
    const { series_id, name, description } = req.body;
    const season = await Season.findByIdAndUpdate(
      req.params.id,
      { series_id, name, description },
      { new: true }
    );

    if (!season) return res.status(404).json({ error: 'Season not found' });

    res.status(200).json(season);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const deleteSeason = async (req, res) => {
  try {
    const season = await Season.findByIdAndDelete(req.params.id);
    if (!season) return res.status(404).json({ error: 'Season not found' });

    res.status(200).json({ message: 'Season deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
