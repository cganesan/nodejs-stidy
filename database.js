
const { MongoClient } = require("mongodb");


const url = "mongodb+srv://cganesankc_db_user:WdrAVhhLnp3S3u6O@ganesh-node.2ukrc3r.mongodb.net/"

const client = new MongoClient(url);

async function main() {
    await client.connect();
    console.log("connected successfuly to the database");
    const db = client.db("ganesh-node");
    const collection = db.collection("users");

    return "done.";
}

main()
.then(console.log)
.catch(console.error)
.finally(() => client.close());