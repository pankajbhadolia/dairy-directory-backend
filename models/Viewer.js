const mongoose = require("mongoose")

const viewerSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  preferences: [String],
  viewed_listings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Lister" }],
})

module.exports = mongoose.model("Viewer", viewerSchema)
