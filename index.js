const express = require("express");
const app = express();
const port = 3100;
const path = require("path");
const userController = require("./controller/UserController");

// access to the template engines of : "ejs"
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Public Folder
app.use(express.static(path.join(__dirname, "public")));

//connected to the DataBase
require("./db/conn");
const SignUpRecord = require("./model/schema");

// Home Loading Page
app.get("/", (req, res) => {
  res.send(
    "<h1>Welcome to back-end of full project structure and details</h1>"
  );
});

app.get("/login", userController.showLogin);
app.get("/signUp", userController.showSignUp);

// Render to the index.ejs of main ejs file
app.get("/index", (req, res) => {
  res.render("index");
});

// Server Port
app.listen(port, (req, res) => {
  console.log(`server listening at port ${port}`);
});
