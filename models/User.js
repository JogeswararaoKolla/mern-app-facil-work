const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: { type: String, unique: "true", required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  createdDate: { type: Date, default: Date.now },
  role: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
