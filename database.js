
require('dotenv').config();
const { MongoClient } = require("mongodb");

// Use environment variables for the MongoDB connection string.
// For local development, create a `.env` file (ignored by git) with the values from `.env.example`.
// Example .env:
// MONGODB_URI="mongodb+srv://user:pass@cluster/mydb"
// DB_NAME=ganesh-node
const url = process.env.MONGODB_URI || "mongodb://localhost:27017";

const client = new MongoClient(url);

async function main() {
    if (!process.env.MONGODB_URI) {
        console.log("Warning: MONGODB_URI not set — using local MongoDB at mongodb://localhost:27017");
    }
    await client.connect();
    console.log("connected successfully to the database");
    const db = client.db(process.env.DB_NAME || "ganesh-node");
    const collection = db.collection("users");

    return "done.";
}

main()
.then(console.log)
.catch(console.error)
.finally(() => client.close());