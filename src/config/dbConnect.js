import mongoose from "mongoose"

mongoose.connect('mongodb+srv://cristianebeel:admin21@cluster-media-manager.vukeenv.mongodb.net/db-api')

let db = mongoose.connection

export default db
