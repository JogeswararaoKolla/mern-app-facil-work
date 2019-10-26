const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addWorkerSchema = new Schema({
  userName: { type: String, required: true },
  projectName: { type: String, required: true },
  workerName: { type: String },
  workerDescription: { type: String, required: true },
  workerDeadLine: { type: Date, required: true, default: Date.now },
  labourHours: { type: Number, required: true },
  remarks: { type: String },
  status: { type: String, required: true, default: "Pending" }
});

const AddWorker = mongoose.model("AddWorker", addWorkerSchema);

module.exports = AddWorker;
