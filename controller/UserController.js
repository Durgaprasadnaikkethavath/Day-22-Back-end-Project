const SignUpRecord = require("../model/schema");

const showSignUp = async (req, res) => {
  try {
    res.render("signUp");
  } catch (e) {
    console.log(e);
  }
};

const showLogin = async (req, res) => {
  try {
    res.render("login");
  } catch (e) {
    console.log(e);
  }
};
const loginUser = async (req, res) => {
  try {
  } catch (e) {
    console.log(e);
  }
};

module.exports = { showLogin, loginUser, showSignUp };
