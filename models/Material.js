const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const materialSchema = new Schema({
  username: { type: String, required: true },
  project_name: { type: String, required: true },
  work_assigned: { type: String, required: true },
  dead_line: { type: Date, required: true },
  material: { type: String, required: true },
  quantity: { type: Number, required: true }
});

const Material = mongoose.model("Material", materialSchema);

module.exports = Material;