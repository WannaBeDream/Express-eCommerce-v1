import multer from 'multer';

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}.png`);
  },
});

const upload = multer({ storage });

export default {
  uploadImage: async (req, res) => upload.single('image'),
  getData: async (req, res) =>  {
    res.send(`/${req.file.path}`);
  }
  
}
