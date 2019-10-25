const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const managerSchema = new Schema({
  username: { type: String, required: true },
  project_name: { type: String, required: true },
  work_assigned: { type: String, required: true },
  worker: { type: String, required: true },
  dead_line: { type: Date, required: true, default: Date.now },
  hours_alloted: { type: Number, required: true },
  status: { type: String, required: true, default: "Pending" }
});

const ManagerView = mongoose.model("ManagerView", managerSchema);

module.exports = ManagerView;
