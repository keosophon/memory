import express from "express";
import getMessage from "../controller/message.js";

const router = express.Router();

router.get("/", getMessage);
router.post("/", postMessage);

export default router;
