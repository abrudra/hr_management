'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init(
    {
      emp_name: DataTypes.STRING,
      emp_email: DataTypes.STRING,
      emp_address: DataTypes.STRING,
      emp_contact: DataTypes.BIGINT,
      emp_pancard: DataTypes.STRING,
      emp_password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};