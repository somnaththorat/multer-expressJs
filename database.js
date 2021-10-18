const mongoose = require('mongoose');

module.exports = () =>{
    mongoose.connect('mongodb://localhost:27017/Multer', {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>console.log('connected to db.......\nCheck schema and run "http://localhost:8080/api/multipleFiles" to test in postman'));
}