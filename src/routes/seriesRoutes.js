import express from "express"
import SerieController from "../controllers/seriesController.js"

const router = express.Router()

router
  .get("/series", SerieController.get)
  .get("/series/search", SerieController.getByNetwork)
  .get("/series/:id", SerieController.getById)
  .post("/series", SerieController.post)
  .put("/series/:id", SerieController.update)
  .delete("/series/:id", SerieController.delete)

export default router
