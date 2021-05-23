require('dotenv').config();

const mongoose = require('mongoose');
const connection = `mongodb+srv://Lordgrim999:Rishi@328@xigniteusers.hkqua.mongodb.net/Xignite?retryWrites=true&w=majority`;
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));

    