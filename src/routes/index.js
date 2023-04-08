import express from "express";
import series from "./seriesRoutes.js"

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({project: "Media Manager API"})
  })

  app.use(
    express.json(),
    series
  )
}

export default routes
