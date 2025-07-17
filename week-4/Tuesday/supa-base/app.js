import express from "express";
import configRoutes from "./routes/config-r.js";
import { config } from "config";
config();

const PORT = process.env.PORT;
const app = express()
app.use(express.json());

configRoutes(app);

app.listen(PORT, () => console.log("server is running on localhost:", PORT))