const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const notifier = require("./api/notifer");
require("./database");

// mongoose.connect("mongodb://localhost/XigniteRates", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// });

app.use(bodyParser.json());
app.use(cors());

// API
const rates = require("./api/rates");
app.use("/api/rates", rates);

app.use(express.static(path.join(__dirname, "../build")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../build","index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(path.join(__dirname, "../build", 'index.html'))
  notifier.addNotifyAll();
  console.log(`Server started on port ${port}`);
});
