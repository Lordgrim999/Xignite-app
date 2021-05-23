const axios = require("axios");
const baseUrl = "https://www.xignite.com/xRates.json/GetRate";
let date = new Date();
let month = date.getMonth() + 1;
let day = date.getDate() - 2;
let year = date.getFullYear();
date = month + "/" + day + "/" + year;

module.exports = {
  getListRates: () =>
    axios({
      method: "GET",
      url:
        baseUrl +
        `?RateType=Prime&AsOfDate=${date}&_fields=Type,Date,Value,Price,Spread,Change,Text,Description&_token=DC9D3167F39B46919285E8265C047FE0`,
      host: "www.xignite.com",
    }),
};
