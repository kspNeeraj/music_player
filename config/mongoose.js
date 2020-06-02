//require the libraray
const mongoose = require('mongoose');

// //connect the database 
 mongoose.connect('mongodb://localhost/music_player');

// //acquire the connection to check if it is successfull
 const db= mongoose.connection;


// //error
 db.on('error',console.error.bind(console,'error in connecting'));


// //up and running then print the message
 db.once('open',function(){
     console.log('connected to database :: mongoDb');
 });

module.exports=db;


