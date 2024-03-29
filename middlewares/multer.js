"use strict"

const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({storage})

const uploadimage = upload.single('photo')

module.exports = uploadimage