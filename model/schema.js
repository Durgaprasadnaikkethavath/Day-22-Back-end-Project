const mongoose = require("mongoose");

const SignUpRecords = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
});

const SignUpRecord = new mongoose.model("SignUpRecord", SignUpRecords);

module.exports = SignUpRecord;
