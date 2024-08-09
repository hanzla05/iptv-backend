import Stream from '../models/streamModel.mjs';

export const createStream = async (req, res) => {
  try {
    const { episode_id, user_id, time } = req.body;

    const stream = new Stream({ episode_id, user_id, time });
    await stream.save();

    res.status(201).json(stream);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const getStreams = async (req, res) => {
  try {
    const streams = await Stream.find().populate('episode_id user_id');
    res.status(200).json(streams);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const getStreamById = async (req, res) => {
  try {
    const stream = await Stream.findById(req.params.id).populate('episode_id user_id');
    if (!stream) return res.status(404).json({ error: 'Stream not found' });

    res.status(200).json(stream);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const updateStream = async (req, res) => {
  try {
    const { episode_id, user_id, time } = req.body;
    const stream = await Stream.findByIdAndUpdate(
      req.params.id,
      { episode_id, user_id, time },
      { new: true }
    );

    if (!stream) return res.status(404).json({ error: 'Stream not found' });

    res.status(200).json(stream);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const deleteStream = async (req, res) => {
  try {
    const stream = await Stream.findByIdAndDelete(req.params.id);
    if (!stream) return res.status(404).json({ error: 'Stream not found' });

    res.status(200).json({ message: 'Stream deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
