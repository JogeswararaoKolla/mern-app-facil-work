const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const timesheetSchema = new Schema({
  username: { type: String, required: true },
  project_name: { type: String, required: true },
  work_assigned: { type: String, required: true },
  start_date: { type: String, required: true },
  end_date: { type: String, required: true },
  hours_worked: { type: Number, required: true }
});

const Timesheet = mongoose.model("TimeSheet", timesheetSchema);

module.exports = Timesheet;