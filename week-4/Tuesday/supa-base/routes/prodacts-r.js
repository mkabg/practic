import express from "express";
import prodacts from "../ctrl/prodacts-ctrl.js";

const router = express.Router();

router.post("/prodacts", prodacts);

export default router;
