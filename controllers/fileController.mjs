import File from '../models/fileModel.mjs';
import fs from 'fs';
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the directory to save files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Append a timestamp to file name
  }
});

const upload = multer({ storage: storage });

export const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const { originalname, filename, mimetype, path: filePath, size } = req.file;

    const file = new File({
      original_name: originalname,
      current_name: filename,
      type: mimetype,
      path: filePath,
      size: size.toString(),
    });

    await file.save();

    res.status(201).json(file);
  } catch (err) {
    console.error(err); // Log error for debugging
    res.status(500).json({ error: 'Server error' });
  }
};



export const getFileById = async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    if (!file) return res.status(404).json({ error: 'File not found' });

    res.status(200).json(file);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const deleteFile = async (req, res) => {
  try {
    const file = await File.findByIdAndDelete(req.params.id);
    if (!file) return res.status(404).json({ error: 'File not found' });

    // Remove the file from the filesystem
    fs.unlink(path.join(__dirname, '..', file.path), (err) => {
      if (err) {
        console.error('Failed to delete file from filesystem:', err);
      }
    });

    res.status(200).json({ message: 'File deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
