import series from '../models/Serie.js'

class SerieController {
  static listarSeries = async (req, res) => {
    let all = await series.find()
    res.status(200).send(all)
  }
}

export default SerieController
