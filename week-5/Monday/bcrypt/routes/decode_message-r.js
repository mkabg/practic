import express from "express";
import decodeMessage from "../ctrl/decode_message.js";

const router = express.Router();

router.post("/", decodeMessage);
export default router;