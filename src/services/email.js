const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const view = require('../utils/email_html')
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
        subject: "Codico de Acesso para recuperar a senha - ponte arco iris",
        html: view.email(name, email, code)
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.status(500).json({ message : error.message})
        } else {
            res.status(200).json({ 
                message : 'Senha enviado com sucesso',
                response : info.response,
                code,
            })
        }
    });
}

module.exports = {
    recorvyEmail,
}