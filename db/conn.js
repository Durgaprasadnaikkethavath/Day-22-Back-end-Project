const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/Back-end-Project-1")
  .then(() => console.log("connected"))
  .catch(() => console.log("not connected"));
