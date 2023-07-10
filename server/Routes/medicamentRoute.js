const multer = require('multer')

const telecharger = multer({
  storage: multer.diskStorage({
      destination: async function(req, file, callback) {
          const folderName = `${Date.now()}`
          req.folderName = folderName
          await mkdir(path.join(__dirname, "../images", folderName))
          req.folder = folderName
          callback(null ,path.join(__dirname, '../images', folderName))
      },
      filename: function (req, file, callback) {
        const extArr = file.mimetype.split('/')
        const extenstion = extArr[extArr.length -1]
          let filename = `${Date.now()}.${extenstion}`;
          callback(null, filename); 
        } 
  }),
  
}) 