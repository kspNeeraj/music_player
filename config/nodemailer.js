//ssssssssssssssss
const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');

//these three were required so we rebndered it
//transporter have information that use to send email to user
let transporter = nodemailer.createTransport({
    service:'gmail',
    host: 'smptp.gmail.com',
    port:587,
    secure:false,
    auth :{
        user:'mailertest871@gmail.com',
        pass:'Krneeraj1997'
    }
});

//template rendring engine
let renderTemplate = (data,relativePath) => {
    let mailHTML;
    ejs.renderFile(
        path.join(__dirname,'../views/mailers',relativePath),
        //the context we pass to the ejs name email
        data,
        //callback function
        function(err,template){
            if(err){console.log('error in rendering template',err); return}

            mailHTML = template;
        }
        
    )
    return mailHTML;
}

//export two keys
module.exports = {
    transporter: transporter,
    renderTemplate: renderTemplate
}