const Joi = require("joi");
// const sanitizeHtml = require("sanitize-html");

const newsLetterValidation = Joi.object({
  title: Joi.string()
    .required()
    .max(100)
    .custom((value, helpers) => {
      const cleanValue = value.replace(/<\/?[^>]+(>|$)/g, "");
      if (value !== cleanValue) {
        return helpers.error(
          "Text field should not contain HTML tags or special characters",
        );
      }
      return cleanValue;
    }),
  description: Joi.string().required().max(500),
  imageUrl: Joi.string().required(),
  author: Joi.string().required(),
});

const updateNewsLetterValidation = Joi.object({
  title: Joi.string()
    .optional()
    .max(100)
    .custom((value, helpers) => {
      const cleanValue = value.replace(/<\/?[^>]+(>|$@)/g, "");
      if (value !== cleanValue) {
        return helpers.error(
          "Text field should not contain HTML tags or special characters"
        );
      }
      return cleanValue;
    }),
  description: Joi.string().optional().max(500),
  imageUrl: Joi.string().optional(),
  author: Joi.string().optional(),
});

module.exports = { newsLetterValidation, updateNewsLetterValidation };
