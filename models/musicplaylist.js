//importing mongoose
const mongoose = require('mongoose');
//creating musicplaylist schema
const musicplaylistSchema = new mongoose.Schema({
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
    }
});

const musicPlaylist = mongoose.model('musicPlaylist',musicplaylistSchema);

module.exports = musicPlaylist;