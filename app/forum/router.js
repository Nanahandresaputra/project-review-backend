import express from "express";
import { indexForum, detailForum, createForum, deleteForum } from "./controller.js";

const router = express.Router();

router.get("/forum", indexForum);
router.get("/forum/:id", detailForum);
router.post("/forum", createForum);
router.delete('/forum/:id', deleteForum);

export default router;
