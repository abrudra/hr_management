'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      emp_name: {
        type: Sequelize.STRING
      },
      emp_email: {
        type: Sequelize.STRING
      },
      emp_address: {
        type: Sequelize.STRING
      },
      emp_contact: {
        type: Sequelize.INTEGER
      },
      emp_pancard: {
        type: Sequelize.STRING
      },
      emp_password: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};