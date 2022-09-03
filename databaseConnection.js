// Whatever require for DB to connect server to DB
const mongoose = require("mongoose");

function DbConnection(){
    const DB_URI = process.env.MONGO_URI;
    mongoose.connect(DB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

// db connection will establish on index.js where it is called...
// console.error gives the red color lines 
// mongoose.connextion has detail of DB

    const db = mongoose.connection;
    db.on("error", console.error.bind(console,"Connection error: "));
    db.once("open", function (){
        console.log("Db connected..");
    });
}

module.exports = DbConnection;