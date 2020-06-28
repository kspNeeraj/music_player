//importing mongoose
const mongoose = require('mongoose');
//creating favsong schema 
const favsongSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    id:{
        type:String,
        required:true
    },
    onclic:{
        type:String,
        required:true
    },
    source:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    likes_count:[{
        type:mongoose.Schema.ObjectId,
        ref:'Trending'
    }]
});

const favSong = mongoose.model('favSong',favsongSchema);

module.exports = favSong;