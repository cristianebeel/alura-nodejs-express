import mongoose from "mongoose"

const serieSchema = new mongoose.Schema({
  id: {type: String},
  tvdb: {type: Number},
  title: {type: String, required: true},
  release_year: {type: String, required: true},
  network: {type: mongoose.Schema.Types.ObjectId, ref: 'networks', required: true},
  status: {type: String, required: true}
})

const series = mongoose.model('series', serieSchema)

export default series
