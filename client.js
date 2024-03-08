const axios = require("axios");

const emailData = {
  name: "Company Name",
  to: "example@email.com",
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
