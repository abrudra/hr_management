const db = require("../../models");
const userModel = db.user;
const bcryptjs = require("bcryptjs");
const util = require("util");
const genSalt = util.promisify(bcryptjs.genSalt);
const hash = util.promisify(bcryptjs.hash);
const jwt = require("jsonwebtoken")

const signUpServices = async (info, userModel, res) => {
  try {
    const result = await userModel.findOne({
      where: { emp_email: info.emp_email },
    });
    if (result) {
      res.status(409).json({
        message: "Email already exists",
      });
    } else {
      const salt = await genSalt(10);
      const hashedPassword = await hash(info.emp_password, salt);
      const userSign = await userModel.create({
        emp_name: info.emp_name,
        emp_email: info.emp_email,
        emp_address: info.emp_address,
        emp_contact: info.emp_contact,
        emp_pancard: info.emp_pancard,
        emp_password: hashedPassword,
      });
      res.status(200).send(userSign);
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

const loginServices = async (req, res) => {
  try {
    const user = await userModel.findOne({
      where: { emp_email: req.body.emp_email},
    });
    if (!user) {
      res.status(401).json({
        message: "Invalid credentials!",
      });
      return;
    }

    const result = await bcryptjs.compare(
      req.body.emp_password,
      user.emp_password
    );

    if (result) {
      const token = jwt.sign(
        {
          emp_email: user.emp_email,
          emp_pancard: user.emp_pancard,
        },
        "secret"
      );
      res.status(200).json({
        message: "Authentication successful!",
        token: token,
      });
    } else {
      res.status(401).json({
        message: "Invalid credentials!",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong!",
    });
  }

  
};

module.exports = {
  signUpServices,
  loginServices,
};
