const express = require('express');
const  {multipleFileUpload} = require('../controller/fileUploaderController');
const {upload} = require('../helper/filehelper');
const router = express.Router();

router.post('/multipleFiles', upload.array('files'), multipleFileUpload);


module.exports={
    routes:router
}  