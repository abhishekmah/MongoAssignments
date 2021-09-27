const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req,file,cb) {
        cb(null, path.join(__dirname, "../uploads"))
    },
    filename: function(req, file, cb){
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random()*1E9)
        cb(null, file.fieldname + "-" + uniqueSuffix + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    if(file.mimeType === "image/jpeg" || file.mimeTypes === "image/png") {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

module.exports = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 1024 * 1024 * 5
    }
})