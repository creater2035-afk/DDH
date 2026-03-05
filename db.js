const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/myproject")
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log(err));

const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

let db;

async function connectDB() {
    await client.connect();
    db = client.db("myproject");
    console.log("Connected to MongoDB");
}

function getDB() {
    return db;
}

module.exports = { connectDB, getDB };
