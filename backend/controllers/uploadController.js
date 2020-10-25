import multer from 'multer';

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}.png`);
  },
});
const fileFilter = (req, file, cb) =>
{
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png')
    {
        cb(null, true);
    }
    else
    {
        cb(null, false);
    }
};

const upload = multer({ storage,fileFilter });

export default {
  uploadImage: (req, res) => {
   upload.single('image');
  },
  getData:  (req, res) =>  {
    res.send(`/${req.file.path}`);
  }
  
}
