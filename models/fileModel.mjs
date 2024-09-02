// import mongoose from 'mongoose';


// const fileSchema = new mongoose.Schema({
//   original_name: { type: String, required: true },
//   current_name: { type: String, required: true },
//   type: { type: String, required: true },
//   path: { type: String, required: true },
//   size: { type: String, required: true },
// });

// const File = mongoose.model('File', fileSchema);

// export default File


import mongoose from 'mongoose';

const fileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const File = mongoose.model('File', fileSchema);

export default File;
