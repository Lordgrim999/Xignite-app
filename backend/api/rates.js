const xignite = require("./xignite");
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const notifier=require('./notifer');

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
router.post("/",   (req, res) => {
  const { username, email } = req.body;
  const user = new User({
    name: username,
    email: email,
  });
  user.save().then( async (resp)=>{
    console.log(resp);
    console.log("saved");
  
    let mailOptions = {
      from: "Rishi Srivastava",
      to: email,
      subject: "XigniteApp Rate Update",
      html: `<h3>Hey ${username}!!</h3><br/>
      <p>Thank You for subscribing</p>`,
    };
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "lordgrim9991@gmail.com",
        pass: "Lordgrim@9628",
      },
    });
  
     await transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        res.status(401).json({ message: "Wrong Email Address" });
      } else {
        console.log("Email sent: " + info.response);
        notifier.addNotifyAll();
        res.status(201).json({ message: "User added to Notifications Please check spam for email" });
      }
    });}
    
  ).catch(err=>console.log(" Error on post method ",err));
  
});

module.exports = router;
