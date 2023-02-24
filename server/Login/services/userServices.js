const db = require("../../models");
const userModel = db.user;
const bcryptjs = require("bcryptjs");
const util = require("util");
const genSalt = util.promisify(bcryptjs.genSalt);
const hash = util.promisify(bcryptjs.hash);
const jwt = require("jsonwebtoken");

const signUpServices = async (info, userModel, res) => {
  try {
    const result = await userModel.findOne({
      where: { emp_email: info.emp_email },
    });
    if (result) {
      res.status(409).json({
        message: "Email already exist.",
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
      res.status(200).json({
        message: "User registred succesfully.",
      });
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
      where: { emp_email: req.body.emp_email },
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
        process.env.JWT_KEY
      );
      res.status(200).json({
        message: "Authentication successful!",
        token,
        data: user,
      });
    } else {
      res.status(401).json({
        message: "Invalid credentials!",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong!",
      error: error,
    });
  }
};

const getAllemployeeServices = async (req, res) => {
  try {
    const employeeData = await userModel.findAll({});
    res.status(200).send(employeeData);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong..! Failed to fetch Data.",
      error: error,
    });
  }
};

const updateEmployeeServices = async (req,userModel, res) => {
  try {
    const info = req.body;
    const existingEmployee = await userModel.findOne({
      where: { emp_email: info.emp_email },
    });
    if (existingEmployee && existingEmployee.id !== req.params.id) {
      res.status(409).json({
        message: "Email already exists.",
      });
    } else {
      const [numUpdated, updatedEmployee] = await userModel.update(info, {
        where: { id: req.params.id },
        returning: true,
      });
      if (numUpdated === 0) {
        res.status(404).json({
          message: "ID doesn't exist.",
        });
      } else {
        res.status(200).json({
          message: "Data updated successfully!",
          data: updatedEmployee[0],
        });
      }
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong.",
      errorMessage: error.message,
    });
  }
};

const deleteEmployeeService = async (req, res) => {
  try {
    let id = req.params.id;
    const result = await userModel.findOne({ where: { id: id } });
    if (result === null) {
      res.status(404).json({
        message: "ID not found: " + id,
      });
    } else {
      await userModel.destroy({ where: { id: id } });
      res.status(200).json({
        message: "ID deleted succesfully: " + id,
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getEmployeeByIdServices = async (req, res) => {
  try {
    let id = req.params.id;
    const employeeData = await userModel.findOne({ where: { id: id } });
    if (employeeData) {
      res.status(200).send(employeeData);
    } else {
      res.status(404).json({
        message: "News letter ID doesn't exist: " + id,
      });
    }
  } catch {
    res.status(500).json({
      message: "Something went wrong..! Failed to fetch Data.",
      error: error,
    });
  }
};

module.exports = {
  signUpServices,
  loginServices,
  getAllemployeeServices,
  updateEmployeeServices,
  deleteEmployeeService,
  getEmployeeByIdServices,
};
