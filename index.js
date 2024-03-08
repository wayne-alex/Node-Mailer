const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const port = 456;

app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_HOST_USER,
    pass: process.env.EMAIL_HOST_PASSWORD,
  },
});

// Endpoint for sending email
app.post("/send-email", (req, res) => {
  const emailData = req.body;

  const mailOptions = {
    from: emailData.name + "<thegrandmaster254@gmail.com>",
    to: emailData.to,
    subject: emailData.subject,
    html: emailData.html_message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).json({ message: "Internal Server Error" });
      console.error(error);
    } else {
      res.status(200).json({ message: "Email sent: " + info.response });
      console.log("Email sent: " + info.response);
    }
  });
});

// Endpoint for checking if the service is running correctly
app.get("", (req, res) => {
  res
    .status(200)
    .json({ message: "Hello world!,This service is running as expected" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
