import express from "express";
import { getAllMessages, createMessage } from "../controllers/messages.js"; //import Messages from "../controller/message.js";

const router = express.Router();

router.get("/", getAllMessages);
router.post("/", createMessage);

export default router;
