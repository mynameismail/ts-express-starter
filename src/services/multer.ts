import moment from 'moment';
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: './static/uploads',
    filename: function (req, file, cb) {
        let name = file.fieldname + '-' + moment.now() + path.extname(file.originalname);
        cb(null, name);
    }
});

export const upload = multer({ storage: storage });
