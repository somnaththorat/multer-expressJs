const MultipleFile = require('../model/multiplefile');


const multipleFileUpload = async (req, res, next)=>{
    try{
        let filesAarray = [];
        req.files.forEach(element => {
            const file = {
                fileName: element.originalname,
                filepath:element.path,
                fileType:element.mimetype
            }
            filesAarray.push(file);
        });
        const multipleFiles =  new MultipleFile({
            title: req.body.title,
            files: filesAarray
        });
        await multipleFiles.save();
        res.status(201).send('File Uploaded successfully');
    }catch(error){
        res.status(400).send(error.message);
    }
}




module.exports = {
    multipleFileUpload
}