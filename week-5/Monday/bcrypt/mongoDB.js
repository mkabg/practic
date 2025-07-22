import { Collection, MongoClient } from "mongodb";
import { config } from "dotenv";
config();

const client = new MongoClient(process.env.MONGO_URI);
let db;

export async function connect() {
    if (!db) {
        await client.connect();
        db = client.db("users");
    }
    return db;
}

connect();
