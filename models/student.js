const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  id: { type: Number },
  name: { type: String, required: true },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Student", studentSchema);
