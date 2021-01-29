require('dotenv').config();
import { Request, Response } from 'express';
import express from 'express';
import pool from '../modules/pool';
import nodemailer from 'nodemailer';

const router: express.Router = express.Router();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NODEMAILER_USERNAME,
    pass: process.env.NODEMAILER_PASSWORD,
  },
});

router.post(
  '/mail',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const mailer = req.body;

    const mailOptions = {
      //example: from: '"Scott" scott@primeacademy.io',
      from: `"InnovateHER" ${process.env.NODEMAILER_USERNAME}`, // sender address -> //YOUR GMAIL USER HERE IN STRING + email not in string! -> EXAMPLE@gmail.com
      // to: mailer.email,
      to: mailer.toEmail, // list of receivers
      subject: mailer.subject, // Subject line
      text: mailer.message, // plain text body
      html: '<b>' + mailer.message + '</b>', // html body
    };

    try {
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
      });

      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
    }
  }
);

export default router;
