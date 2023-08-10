import multer from "multer";
import path from 'path';

const __dirname = path.resolve()

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'public/image/user'));
    },
    filename: (req, file, cb) => {
        const originalExt = file.originalname.split('.')[file.originalname.split('.').length - 1];
        cb(null, `${Date.now()}.${originalExt}`);
    }
});

const typeExtension = ['image/jpg', 'image/jpeg', 'image/png']

const imageUser = multer({ 
    storage,
    fileFilter: (req, file, cb) => {
     if(!typeExtension.includes(file.mimetype)){
        return  cb(new Error('hanya masukan file gambar'));
     }return cb(null, true)
    }
 }).single('foto') ;

 export default imageUser