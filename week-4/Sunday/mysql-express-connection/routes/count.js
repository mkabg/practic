import express from "express";
import { 
    count1,
    count2,
    count3,
    count4,
    count5
} from "../DAL/count.js"

const router = express.Router();

router.get("/count1", count1);
router.get("/count2", count2);
router.get("/count3", count3);
router.get("/count4", count4);
router.get("/count5", count5);

export default router;