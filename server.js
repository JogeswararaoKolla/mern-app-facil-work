const express = require("express");
const app = express();
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes/index.js");

require("dotenv").config();

const PORT = process.env.PORT || 3001;

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || process.env.MONGODB_LOCAL);

app.use(routes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log("App is listening to port 3001");
});
