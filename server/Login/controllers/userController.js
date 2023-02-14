const db = require("../../models");
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userModel = db.user;

const signUp = async (req , res) =>{
    let info = {
      emp_name: req.body.emp_name,
      emp_email: req.body.emp_email,
      emp_address: req.body.emp_address,
      emp_contact: req.body.emp_contact,
      emp_pancard: req.body.emp_pancard,
      emp_password: req.body.emp_password,
    };
signUpServices(info, userModel,res);
}