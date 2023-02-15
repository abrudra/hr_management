const db = require("../../models");
const {
  newsLetterValidation,
  updateNewsLetterValidation,
} = require("../validation/newsLetterValidation");

const NewsLetter = db.newsLetterModel;

const newsLetter = async (info, NewsLetter, res) => {
  const validationResponse = newsLetterValidation.validate(info);

  if (validationResponse.error) {
    return res.status(400).json({
      message: "validation Failed",
      errors: validationResponse.error.details.map((err) => err.message),
    });
  }
  try {
    const newsletter = await NewsLetter.create({
      title: info.title,
      description: info.description,
      imageUrl: info.imageUrl,
      author: info.author,
    });
    res.status(200).json({
      message: "Data created..!",
      Data: newsletter,
    });
  } catch (error) {
    res.status(500).json({
      message:"Something went wrong..! Failed to created Data.",
      error: error,
    })
  }
};

const getAllNewsLetterService = async (req, res) => {
  try {
    const newsLetter = await NewsLetter.findAll({});
    res.status(200).send(newsLetter);
  } catch (error) {
     res.status(500).json({
       message: "Something went wrong..! Failed to fetch Data.",
       error: error,
     });
  }
};

const getSingleNewsLetterService = async (req, res) => {
  try {
    let id = req.params.id;
    const newsLetter = await NewsLetter.findOne({ where: { id: id } });
    res.status(200).send(newsLetter);
  } catch {
     res.status(500).json({
       message: "Something went wrong..! Failed to fetch Data.",
       error: error,
     });
  }
};

const updateNewsLetterService = async (req, res) => {
  const validationResponse = updateNewsLetterValidation.validate(req.body);
  if (validationResponse.error) {
    return res.status(400).json({
      message: "validation Failed",
      errors: validationResponse.error.details.map((err) => err.message),
    });
  }
  try {
    let id = req.params.id;
    const newsLetter = await NewsLetter.update(req.body, {
      where: { id: id },
    });
    const newsLetters = await NewsLetter.findOne({where : {id:id}});
    res.status(200).json({
      message : "Data updated succesfully..!",
     updateData : newsLetters,
    });
  } catch(error) {
    res.status(500).json({
      message : "Data not updated ..Something went wrong.!",
      errorMessage: error.message,
    });
  }
};

const deleteNewsLetterService = async (req, res) => {
  try {
    let id = req.params.id;
    const result = await NewsLetter.findOne({ where: { id: id } });
    if (result === null) {
      res.status(404).json({
        message: "ID not found: " + id,
      });
    } else {
      await NewsLetter.destroy({ where: { id: id } });
      res.status(200).json({
        message: "ID deleted succesfully: " + id,
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
module.exports = {
  newsLetter,
  getAllNewsLetterService,
  getSingleNewsLetterService,
  updateNewsLetterService,
  deleteNewsLetterService,
};
