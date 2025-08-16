import express from "express";
import {
  createComment,
  deleteComment,
  getComments,
} from "../controllers/comment_controller.js";

const router = express.Router();

router.get("/:movie_id", getComments);
router.post("/", createComment);
router.delete("/:id", deleteComment);

export default router;
