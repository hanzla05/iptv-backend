import mongoose from 'mongoose';


const streamSchema = new mongoose.Schema({
  episode_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Episode', required: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  time: { type: String, required: true },
});

const Stream = mongoose.model('Stream', streamSchema);

export default Stream

