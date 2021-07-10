const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const view = require('../utils/transportEmail')

const recorvyEmail =  (req, res) => {
  const { email, name, code } = req.userRecorvy;
  
    var transporter = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: process.env.GMAIL_USER_RECORVY,
            pass: process.env.GMAIL_USER_RECORVY_PASSWORD
        }
    }));
    
    var mailOptions = {
        from: process.env.GMAIL_USER_RECORVY,
        to: email,
        subject: "Códico de acesso para recuperar a senha | Ponte Arco-íris",
        html: view.email(name, email, code)
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.status(500).json({ message : error.message})
        } else {
            res.status(200).json({ 
                message : 'As intruções para recuperar a senha foram eviadas por email',
                response : info.response,
            })
        }
    });
}

module.exports = {
    recorvyEmail,
}