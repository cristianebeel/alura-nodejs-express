import express from "express"
import SerieController from "../controllers/seriesController.js"

const router = express.Router()

router
  .get("/series", SerieController.listarSeries)

export default router