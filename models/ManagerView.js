const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const managerSchema = new Schema({
  userName: { type: String, required: true },
  projectName: { type: String, required: true },
  workDescription: { type: String, required: true },
  deadLine: { type: Date, required: true, default: Date.now },
  hoursAlloted: { type: Number, required: true },
  status: { type: String, required: true, default: "Pending" }
});

const ManagerView = mongoose.model("ManagerView", managerSchema);

module.exports = ManagerView;
