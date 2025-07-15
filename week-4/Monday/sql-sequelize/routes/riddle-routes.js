import express from "express";
import {
    getRiddles,
    getRiddle,
    createRiddle,
    updateRiddle,
    deleteRiddle
} from "../controllers/riddle-controler.js";

const router = express.Router();

router.get("/getAllRiddles", getRiddles);
router.get("/getRiddle/:id", getRiddle);
router.post("/createRiddle", createRiddle);
router.put("/updateRiddle/:id", updateRiddle);
router.delete("/deleteRiddle/:id", deleteRiddle)

export default router;