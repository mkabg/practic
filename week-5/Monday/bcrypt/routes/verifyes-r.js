import express from "express";
import verifyes from "../ctrl/verifyes.js";

const router = express.Router();

router.post("/", verifyes);
export default router;