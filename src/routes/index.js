import express from "express";
import series from "./seriesRoutes.js"
import networks from "./networksRoutes.js"

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({project: "Media Manager API"})
  })

  app.use(
    express.json(),
    series,
    networks
  )
}

export default routes
