const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const managerSchema = new Schema({
  project_name: { type: String, required: true },
  work_assigned: { type: String, required: true },
  worker: { type: String, required: true },
  dead_line: { type: String, required: true },  
  hours_alloted: { type: Number, required: true },
  status: { type: String, required: true },  
});

const ManagerView = mongoose.model("ManagerView", managerSchema);

module.exports = ManagerView;