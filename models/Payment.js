const mongoose = require("mongoose")

const paymentSchema = new mongoose.Schema({
  lister_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Lister" },
  amount: { type: Number, required: true },
  payment_date: { type: Date, default: Date.now },
  payment_method: String,
  payment_status: { type: String, required: true, enum: ["Completed", "Failed", "Pending"] },
  invoice_number: { type: String, unique: true },
  taxes: Number,
  total_amount: Number,
  next_payment_due: Date,
})

module.exports = mongoose.model("Payment", paymentSchema)
