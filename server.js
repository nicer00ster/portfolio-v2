const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const smtpTransport = require('nodemailer-smtp-transport');
const nodemailer = require('nodemailer');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const config = require('./config');

const transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
        user: config.email,
        pass: config.pas    sword,
    }
}));

const send = ({ email, name, message }) => {
    const mailOptions = {
        from: name,
        to: 'abusch1013@gmail.com',
        subject: `New message from ${name}!`,
        text: message,
        replyTo: email,
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) =>
            error ? reject(error) : resolve(info)
        )
    })
};

app.prepare().then(() => {
    const server = express();

    server.use(bodyParser.json());

    server.get('*', (req, res) => {
        return handle(req, res)
    });

    server.post('/api/contact', (req, res) => {
        const { name, email, message } = req.body;
        send({ name, email, message }).then(() => {
            res.send('success');
        }).catch((err) => {
            console.error(err);
            res.send('error');
        })
    });

    server.listen(3000, (err) => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3000');
    });
});