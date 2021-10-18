const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const multipleFilesSchema = new Schema({
    title:{
        type:String,
        require:true
    },
    files:[Object]
}, {timestamps:true});

module.exports= mongoose.model('multipleFile', multipleFilesSchema);