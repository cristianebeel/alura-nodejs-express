import express from "express"
import NetworkController from "../controllers/networksController.js"

const router = express.Router()

router
  .get("/networks", NetworkController.get)
  .get("/networks/:id", NetworkController.getById)
  .post("/networks", NetworkController.post)
  .put("/networks/:id", NetworkController.update)
  .delete("/networks/:id", NetworkController.delete)

export default router
