import express from "express";
import { createMessage, getAllMessages } from "../controllers/messageControllers.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router()


// Create Message
router.route("/createmessage").post(isAuthenticated, createMessage)

// Get all Messages
router.route("/getallmessages").post(isAuthenticated, getAllMessages)


export default router;