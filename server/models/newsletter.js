'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class newsLetter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  newsLetter.init({
    title: DataTypes.STRING,
    discription: DataTypes.TEXT,
    imageUrl: DataTypes.STRING,
    author: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'newsLetter',
  });
  return newsLetter;
};