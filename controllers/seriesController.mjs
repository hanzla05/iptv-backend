import Series from '../models/seriesModel.mjs';

export const createSeries = async (req, res) => {
  try {
    const { name, description, trailer_id, thumbnail_id } = req.body;

    const series = new Series({ name, description, trailer_id, thumbnail_id });
    await series.save();

    res.status(201).json(series);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const getSeries = async (req, res) => {
  try {
    const seriesList = await Series.find().populate('trailer_id thumbnail_id');
    res.status(200).json(seriesList);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const getSeriesById = async (req, res) => {
  try {
    const series = await Series.findById(req.params.id).populate('trailer_id thumbnail_id');
    if (!series) return res.status(404).json({ error: 'Series not found' });

    res.status(200).json(series);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const updateSeries = async (req, res) => {
  try {
    const { name, description, trailer_id, thumbnail_id } = req.body;
    const series = await Series.findByIdAndUpdate(
      req.params.id,
      { name, description, trailer_id, thumbnail_id },
      { new: true }
    );

    if (!series) return res.status(404).json({ error: 'Series not found' });

    res.status(200).json(series);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const deleteSeries = async (req, res) => {
  try {
    const series = await Series.findByIdAndDelete(req.params.id);
    if (!series) return res.status(404).json({ error: 'Series not found' });

    res.status(200).json({ message: 'Series deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
