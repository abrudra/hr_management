const db = require("../../models");
const userModel = db.user;



const signUpServices = async (info, userModel, res) => {
  try {
    const userSign = await userModel.create({
      emp_name: req.body.emp_name,
      emp_email: req.body.emp_email,
      emp_address: req.body.emp_address,
      emp_contact: req.body.emp_contact,
      emp_pancard: req.body.emp_pancard,
      emp_password: req.body.emp_password,
    });
    res.status(200).send(userSign);
  } catch (error) {
    res.status(500).send(error);
  }
};