import express from "express";
import { config } from "config";
config();

const PORT = process.env.PORT;
const app = express()
app.use(express.json());

app.listen(PORT, () => console.log("server is running on localhost:", PORT))