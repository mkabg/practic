import express from "express";
import {signUp} from "../ctrl/sign-up.js";

const router = express.Router();

router.post("/", signUp);
export default router;