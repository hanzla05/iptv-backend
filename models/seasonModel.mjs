import mongoose from "mongoose";

const seasonSchema = new mongoose.Schema({
  series_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Series', required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
});

const Season = mongoose.model('Season', seasonSchema);

export default Season
