const mongoose = require("mongoose")

const reminderSchema = new mongoose.Schema({
  lister_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Lister" },
  reminder_date: { type: Date, required: true },
  reminder_type: {
    type: String,
    required: true,
    enum: ["30 Days Before", "7 Days Before", "7 Days After"],
  },
  reminder_status: { type: String, required: true, enum: ["Sent", "Not Sent", "Responded"] },
  email_sent: { type: Boolean, default: false },
  response_received: { type: Boolean, default: false },
  next_reminder_id: { type: mongoose.Schema.Types.ObjectId, ref: "Reminder" },
})

module.exports = mongoose.model("Reminder", reminderSchema)
