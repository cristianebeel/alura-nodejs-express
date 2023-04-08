import mongoose from "mongoose"

const networkSchema = new mongoose.Schema(
  {
    id: {type: String},
    name: {type: String, required: true},
    country: {type: String}
  },
  {
    versionKey: false
  }
)

const networks = mongoose.model('networks', networkSchema)

export default networks
