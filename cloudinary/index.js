const crypto = require('crypto');
const cloudinary = require('cloudinary').v2;
cloudinary.config({ 
    cloud_name: 'dhvigdq3m', 
    api_key: '422361665526515', 
    api_secret: 'Vrqz2nkShdo1jedXQOK5TiOV2Sg' 
});

const { CloudinaryStorage } = require('multer-storage-cloudinary');

const storage = new CloudinaryStorage({
    cloudinary,
    folder: 'lab_portal',
    allowedFormats: ['jpeg', 'jpg', 'png'],
    filename: function (req, file, cb) {
        let buf = crypto.randomBytes(20);
        buf = buf.toString('hex');
        let uniqFileName = file.originalname.replace(/\.jpeg|\.jpg|\.png/ig, '');
        uniqFileName += buf;
      cb(undefined, uniqFileName );
    }
});

module.exports = {
    cloudinary,
    storage
}