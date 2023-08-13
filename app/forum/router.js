import express from "express";
import { indexForum, detailForum, createForum } from "./controller.js";

const router = express.Router();

router.get("/forum", indexForum);
router.get("/forum/:id", detailForum);
router.post("/forum", createForum);

export default router;
