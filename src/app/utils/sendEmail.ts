import nodemailer from 'nodemailer';
import config from '../config';

export const sendEmail = async (to: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: config.NODE_ENV === 'production',
    auth: {
      user: 'nobabsarkar2020@gmail.com',
      pass: 'hqkc hftd wmkm epfm',
    },
  });

  await transporter.sendMail({
    from: 'nobabsarkar2020@gmail.com',
    to,
    subject: 'Reset Your Password Within 10 mins',
    text: '', // plain‑text body
    html, // HTML body
  });
};
