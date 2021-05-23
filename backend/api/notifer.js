const nodemailer = require("nodemailer");
const cron = require("node-cron");
const User = require("../models/user");
const xignite = require("./xignite");
require("dotenv").config();

exports.addNotifyAll = async () => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "srivastavaak47rishi@gmail.com",
      pass: process.env.pass,
    },
  });

  const docs = await User.find();
  let emails = "";
  let response = await xignite.getListRates();
  response = response.data;
  console.log(response);

  docs.map((doc) => {
    emails = emails + doc.email + ",";
  });
  console.log("all users", emails);
  let description;
  if(response.Description===null)
  {
    description="Not available";
  }
  else{
    description=response.Description.Description;
  }
  let mailOptions = {
    from: "srivastavaak47rishi@gmail.com",
    to: emails,
    subject: "XigniteApp Rate Update",
    html: `<b>Type: </b><p>${response.Type}</p>
    <br/>
    <b>Value: </b><p>${response.Value}</p>
    <b>Date: </b><p>${response.Date}</p>
    <b>Description: </b><p>${description}</p>`,
    text: "Thank you for subscribing",
  };
  cron.schedule(
    "0 10 * * *",
    () => {
      triggerEvent(mailOptions, transporter);
    },
    {
      scheduled: true,
      timezone: "Asia/Kolkata",
    }
  );
};
async function triggerEvent(mailOptions, transporter) {
  await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}
