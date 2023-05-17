const mongoose = require("mongoose");

async function connection () {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Successfully connected to the Mongodb")
    } catch (error) {

    }
}

connection()