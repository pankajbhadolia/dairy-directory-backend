const mongoose = require("mongoose")

const listerSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  business_name: String,
  description: String,
  address: String,
  phone: String,
  website: String,
  listing_start: Date,
  listing_end: Date,
  listing_status: { type: String, default: "Pending", enum: ["Active", "Expired", "Pending"] },
})

module.exports = mongoose.model("Lister", listerSchema)
