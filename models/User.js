const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  hashed_password: { type: String, required: true },
  role: { type: String, required: true, enum: ["Lister", "Viewer"] },
  created_at: { type: Date, default: Date.now },
  last_login: Date,
})

module.exports = mongoose.model("User", userSchema)
