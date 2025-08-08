import express from "express";
import { createMovie, deleteMovie, getMovieById, getMovies, updateMovie } from "../controllers/movie_controller.js";
getMovies;

const router = express.Router();

router.get("/", getMovies);
router.get("/:id", getMovieById);
router.post("/", createMovie);
router.get("/:id", deleteMovie);
router.put("/:id", updateMovie);

export default router;
