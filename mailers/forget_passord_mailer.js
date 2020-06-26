const nodemailer = require('../config/nodemailer');
const crypto = require('crypto');
const { Console } = require('console');
// this is the another way of exporting method using arrows
exports.forget_password = (email) => {
    
    let password=crypto.randomBytes(20).toString('hex');
    console.log(password);
    //send mail is predefined function which take arguments
    nodemailer.transporter.sendMail({
        from: "musicplayer",
        to: email,
        subject: "password: change",
        html:`<h1> your high security password: is <h2> ${password} </h2>  </h1>  `
    },(err, info) => {
        //call back function
        if(err){
            console.log('error in sending message',err);
            return
        }

        console.log('message delivered' , info);
        return password;
    });
    return password;
}