import mongoose from 'mongoose';


const episodeSchema = new mongoose.Schema({
  season_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Season', required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  thumbnail_id: { type: mongoose.Schema.Types.ObjectId, ref: 'File', required: true },
});

const Episode = mongoose.model('Episode', episodeSchema);

export default Episode
