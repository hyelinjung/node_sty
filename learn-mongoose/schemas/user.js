const mongoose = require('mongoose');

const {Schema} = mongoose;
const userSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique:true,
    },
    age:{
        type:Number,
        required:true,
    },
    married:{
        type:Boolean,
        required:true,
    },
    comment:String,
    createdAt:{
        type:Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('User',userSchema); //스키마와 컬렉션 연결 users이름의 컬렉션이 생김