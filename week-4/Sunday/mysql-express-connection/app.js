import { config } from "dotenv";
import express from "express";
import configRoutes from "./routes/configR.js"
config();

const PORT = process.env.PORT;
const DB_HOST = process.env.DB_HOST;

const app = express();
app.use(express.json())
configRoutes(app)


app.listen(PORT, () => console.log(`server is running on ${DB_HOST, PORT}`))
