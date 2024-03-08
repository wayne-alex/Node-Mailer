const axios = require("axios");

const emailData = {
  name: "Face Recognition",
  to: "waynealex9914@gmail.com",
  subject: "Test Email",
  html_message: "<p>Hello, this is a test email!</p>",
};

axios
  .post("https://node-mailer-brown.vercel.app/send-email", emailData, {
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then((response) => {
    console.log("Response:", response.data);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
