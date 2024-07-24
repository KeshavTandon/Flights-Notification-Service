const nodemailer = require("nodemailer");

const { GMAIL_PASS, GMAIL_ID } = require("./server-config");

const mailsender = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: GMAIL_ID,
    pass: GMAIL_PASS,
  },
});

module.exports = mailsender;