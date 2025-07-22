import express from "express";
import {configRoutes} from "./routes/config-r.js";
import { config } from "dotenv";
config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

configRoutes(app);

app.listen(PORT, () => console.log("server is running on port: ", PORT));
