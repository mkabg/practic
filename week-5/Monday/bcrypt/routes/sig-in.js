import express from "express";
import sigIn from "../ctrl/sig-in.js";

const router = express.Router();

router.post("/", sigIn);

export default router;