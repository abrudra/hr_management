"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "newsLetterModels",
      [
        {
          title: "Seeder updated Joi Phishing Attacks: What You Need to Know",
          description:
            "ybersecurity professionals consider phishing attacks to be the most dangerous threat to cybersecurity for their organizations, according to research by Cyber Security Hub, an online news site for cybersecurity professionals.",
          imageUrl:
            "https://images.unsplash.com/photo-1530811761207-8d9d22f0a141?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29vcGVyYXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          author: "By Lin Grensing-Pophal",
          createdAt: Sequelize.fn("NOW"),
          updatedAt: Sequelize.fn("NOW"),
        },
        {
          title:
            "Seeder How Employers Are Managing Compensation Challenges in 2023",
          description:
            "With 2023 well underway, many employers are still trying to find the right levels of pay for their employees. The stakes are high: If employers don't get compensation right, they may find themselves losing out on talent.",
          imageUrl:
            "https://images.unsplash.com/photo-1554902748-feaf536fc594?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29vcGVyYXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          author: "By Joanne Sammer",
          createdAt: Sequelize.fn("NOW"),
          updatedAt: Sequelize.fn("NOW"),
        },
        {
          title:
            "Seeder 2 How Employers Are Managing Compensation Challenges in 2023",
          description:
            "With 2023 well underway, many employers are still trying to find the right levels of pay for their employees. The stakes are high: If employers don't get compensation right, they may find themselves losing out on talent.",
          imageUrl:
            "https://images.unsplash.com/photo-1554902748-feaf536fc594?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29vcGVyYXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          author: "By Joanne Sammer",
          createdAt: Sequelize.fn("NOW"),
          updatedAt: Sequelize.fn("NOW"),
        },
        {
          title:
            "Seeder 3 How Employers Are Managing Compensation Challenges in 2023",
          description:
            "With 2023 well underway, many employers are still trying to find the right levels of pay for their employees. The stakes are high: If employers don't get compensation right, they may find themselves losing out on talent.",
          imageUrl:
            "https://images.unsplash.com/photo-1554902748-feaf536fc594?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29vcGVyYXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          author: "By Joanne Sammer",
          createdAt: Sequelize.fn("NOW"),
          updatedAt: Sequelize.fn("NOW"),
        },
        {
          title:
            "Seeder 4 How Employers Are Managing Compensation Challenges in 2023",
          description:
            "With 2023 well underway, many employers are still trying to find the right levels of pay for their employees. The stakes are high: If employers don't get compensation right, they may find themselves losing out on talent.",
          imageUrl:
            "https://images.unsplash.com/photo-1554902748-feaf536fc594?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29vcGVyYXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          author: "By Joanne Sammer",
          createdAt: Sequelize.fn("NOW"),
          updatedAt: Sequelize.fn("NOW"),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("newsLetterModels", null, {});
  },
};
