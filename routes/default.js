const express = require('express');

const path = require('path');

const bodyParser = require('body-parser');

var nodemailer = require('nodemailer');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

const router = express.Router();

router.get('/',(req,res,next)=>{
    console.log("HOME PAGE");
    res.sendFile(path.join(__dirname,'../','views','default.html'));
});

router.post('/send-mail',(req,res,next)=>{
  console.log("In Post Send Mail");
  var body  = req.body;;
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'utsgarg.ug@gmail.com',
          pass: 'bqzrmvbtpzrtllcd'
        }
      });
      
      var mailOptions = {
        from: body.senderEmail,
        to: 'utsgarg.ug@gmail.com',
        subject: body.mailSubject + 'from ' + body.senderName + ' '+ body.senderNumber,
        text: body.mailBody
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    res.redirect('/');
});


module.exports = router;