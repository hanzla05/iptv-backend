import mongoose from 'mongoose'


const genreSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String},
  name: { type: String, required: true },

});

const Genre = mongoose.model('Genre', genreSchema);

export default Genre

