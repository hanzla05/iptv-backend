import File from '../models/fileModel.mjs';
import fs from 'fs';
import multer from 'multer';
import path from 'path';




// export const uploadFile = async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ error: 'No file uploaded' });
//     }
//     let image;

//     if (req.file) {
//       image = {
//         url: `${req.protocol}://${req.get("host")}/public/${req.file.filename}`,
//         filename: req.file.filename,
//         path: req.file.path,
//         originalName: req.file.originalname,
// };
// }

//     let { originalname, filename, mimetype, path: filePath, size } = req.file;
//     console.log(image?.url)
//     filePath = image?.url
    

//     const file = new File({
//       original_name: originalname,
//       current_name: filename,
//       type: mimetype,
//       path: filePath,
//       size: size.toString(),
//     });

//     await file.save();

//     res.status(201).json(file);
//   } catch (err) {
//     console.error(err); // Log error for debugging
//     res.status(500).json({ error: 'Server error' });
//   }
// };



// export const getFileById = async (req, res) => {
//   try {
//     const file = await File.findById(req.params.id);
//     if (!file) return res.status(404).json({ error: 'File not found' });

//     res.status(200).json(file);
//   } catch (err) {
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// export const deleteFile = async (req, res) => {
//   try {
//     const file = await File.findByIdAndDelete(req.params.id);
//     if (!file) return res.status(404).json({ error: 'File not found' });

//     // Remove the file from the filesystem
//     fs.unlink(path.join(__dirname, '..', file.path), (err) => {
//       if (err) {
//         console.error('Failed to delete file from filesystem:', err);
//       }
//     });

//     res.status(200).json({ message: 'File deleted' });
//   } catch (err) {
//     res.status(500).json({ error: 'Server error' });
//   }
// };


// export const getAllFiles = async (req, res) => {
//   try {
//     const files = await File.find();
//     res.status(200).json(files);
//   } catch (err) {
//     res.status(500).json({ error: 'Server error' });
//   }
// };


// export const uploadFile = async (req, res) => {
//   try {
//     const { name, image } = req.body;

//     if (!name || !image) {
//       return res.status(400).json({ error: 'Name and image are required' });
//     }

//     const file = new File({
//       name,  // Directly store the name
//       image, // Directly store the image string (URL or any string)
//     });

//     await file.save();

//     res.status(201).json(file);
//   } catch (err) {
//     console.error(err); // Log error for debugging
//     res.status(500).json({ error: 'Server error' });
//   }
// };



// Upload a new file
export const uploadFile = async (req, res) => {
  try {
    const { name, image } = req.body;

    if (!name || !image) {
      return res.status(400).json({ error: 'Name and image are required' });
    }

    const file = new File({
      name,
      image,
    });

    await file.save();
    res.status(201).json(file);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get a file by ID
export const getFileById = async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    if (!file) {
      return res.status(404).json({ error: 'File not found' });
    }
    res.status(200).json(file);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get all files
export const getAllFiles = async (req, res) => {
  try {
    const files = await File.find();
    res.status(200).json(files);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Update a file by ID
export const updateFileById = async (req, res) => {
  try {
    const { name, image } = req.body;
    const updatedFile = await File.findByIdAndUpdate(
      req.params.id,
      { name, image },
      { new: true, runValidators: true }
    );

    if (!updatedFile) {
      return res.status(404).json({ error: 'File not found' });
    }

    res.status(200).json(updatedFile);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete a file by ID
export const deleteFileById = async (req, res) => {
  try {
    const file = await File.findByIdAndDelete(req.params.id);
    if (!file) {
      return res.status(404).json({ error: 'File not found' });
    }
    res.status(200).json({ message: 'File deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
