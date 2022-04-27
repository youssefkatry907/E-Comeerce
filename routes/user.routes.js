const app = require("express").Router();
const userValidation = require("../modules/user/user.validation");
const validate = require("../helpers/common.validation");
const userController = require("../controller/user.controller");

app.post("/signUp", validate(userValidation.signUpValidation) , userController.signUp);
app.post("/adminSignUp", validate(userValidation.adminSignUpValidation) , userController.signUp);
app.post("/logIn", validate(userValidation.logInValidation) , userController.logIn);
// app.delete("logOut",userController.logOut);


module.exports = app;