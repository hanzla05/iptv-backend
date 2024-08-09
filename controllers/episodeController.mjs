import Episode from '../models/episodeModel.mjs';

export const createEpisode = async (req, res) => {
  try {
    const { season_id, name, description, thumbnail_id } = req.body;

    const episode = new Episode({ season_id, name, description, thumbnail_id });
    await episode.save();

    res.status(201).json(episode);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const getEpisodes = async (req, res) => {
  try {
    const episodes = await Episode.find().populate('season_id thumbnail_id');
    res.status(200).json(episodes);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const getEpisodeById = async (req, res) => {
  try {
    const episode = await Episode.findById(req.params.id).populate('season_id thumbnail_id');
    if (!episode) return res.status(404).json({ error: 'Episode not found' });

    res.status(200).json(episode);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const updateEpisode = async (req, res) => {
  try {
    const { season_id, name, description, thumbnail_id } = req.body;
    const episode = await Episode.findByIdAndUpdate(
      req.params.id,
      { season_id, name, description, thumbnail_id },
      { new: true }
    );

    if (!episode) return res.status(404).json({ error: 'Episode not found' });

    res.status(200).json(episode);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const deleteEpisode = async (req, res) => {
  try {
    const episode = await Episode.findByIdAndDelete(req.params.id);
    if (!episode) return res.status(404).json({ error: 'Episode not found' });

    res.status(200).json({ message: 'Episode deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
