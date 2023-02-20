const db = require("../../models");
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const {
  signUpServices,
  loginServices,
  getAllemployeeServices,
} = require("../services/userServices");

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

const login = async (req ,res ) =>{
loginServices (req,res);
}

const getAllemployee = async ( req , res)=> {
  getAllemployeeServices (req ,res);
}

module.exports = {
  signUp,
  login,
  getAllemployee,
};