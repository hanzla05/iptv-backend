import mongoose from 'mongoose';


const seriesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  trailer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'File', required: true },
  thumbnail_id: { type: mongoose.Schema.Types.ObjectId, ref: 'File', required: true },
});

const Series = mongoose.model('Series', seriesSchema);

export default Series

