const Joi = require("joi");


const newsLetterValidation = Joi.object({
  title: Joi.string().required().max(100),
  description: Joi.string().required().max(500),
  imageUrl: Joi.string().required(),
  author: Joi.string().required(),
});

const updateNewsLetterValidation = Joi.object({
  title: Joi.string().optional().max(100),
  description: Joi.string().optional().max(500),
  imageUrl: Joi.string().optional(),
  author: Joi.string().optional(),
});

module.exports = { newsLetterValidation, updateNewsLetterValidation };
