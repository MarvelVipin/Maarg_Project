const mongoose = require('mongoose');

function connectToDb () {
    mongoose.connect(process.env.DB_CONNECT).then (()=> {
        console.log("Connected to the DB successfully");
    }).catch((err)=> {
        console.log("Error connecting to the DB", err);
    });

}

module.exports = connectToDb;