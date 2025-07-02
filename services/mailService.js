require('dotenv').config()
// services/mailService.js
const nodemailer = require('nodemailer')

// For testing with Gmail — you can use your own SMTP as well
const transporter = nodemailer.createTransport({
  service: 'gmail',
  secure:true,
  auth: {
    user: process.env.MAIL_USER,      // your Gmail address
    pass: process.env.MAIL_PASSWORD   // app password, not your real Gmail password
  }
})

const sendMail = async (to, subject, text) => {
  try {
    const mailOptions = {
      from: process.env.MAIL_USER,
      to:'shashakipatshala@gmail.com',
      subject,
      text
    }

    const info = await transporter.sendMail(mailOptions)
    // console.log("Email sent: " + info.response)
    return info
  } catch (err) {
    // console.error("Error sending email:", err)
    throw err
  }
}

module.exports = { sendMail }
