const xignite = require("./xignite");
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const notifier = require("./notifer");
require("dotenv").config();
const User = require("../models/user");

router.get("/", (req, res) => {
  xignite
    .getListRates()
    .then((response) => {
      console.log("new response", response.data);
      res.status(201).json(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});
router.post("/notify", async (req, res) => {
  const { username, email } = req.body;
  const user = new User({
    name: username,
    email: email,
  });
  const resp = await user.save();
  console.log(resp);
  console.log("saved");

  let mailOptions = {
    from: "srivastavaak47rishi@gmail.com",
    to: email,
    subject: "XigniteApp Rate Update",
    html: `<h3>Hey ${username}!!</h3><br/>
    <p>Thank You for subscribing</p>`,
  };
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "srivastavaak47rishi@gmail.com",
      pass: process.env.pass,
    },
  });

  await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(401).json({ message: "Wrong Email Address" });
    } else {
      console.log("Email sent: " + info.response);
      notifier.addNotifyAll();
      res.status(201).json({ message: "User added to Notifications" });
    }
  });
});

module.exports = router;