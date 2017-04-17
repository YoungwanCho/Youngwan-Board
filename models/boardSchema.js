var mongoose = require('mongoose');

var boradSchema = mongoose.Schema({
    writer: String,
    password: String,
    title: String,
    contents: String,
    comments:[{
        name:String,
        memo:String, 
        data:{type:Date, default:Date.now}
    }],
    count:{type:Number, default:0},
    data: {type:Date, default: Date.now},
    updated: [{contents:String, data:{type:Date, default: Date.now}}],
    deleted: {type: Boolean, default: false}
});

module.exports  = mongoose.model('BoardContents', boradSchema);