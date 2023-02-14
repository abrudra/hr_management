const db = require("../../models");

const {
  newsLetter,
  getAllNewsLetterService,
  getSingleNewsLetterService,
  updateNewsLetterService,
  deleteNewsLetterService,
} = require('../services/newsLetterServices');

const NewsLetter = db.newsLetterModel;

const addNewsLetter = async (req, res) => {
  let info = {
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    author: req.body.author,
  };

  newsLetter(info, NewsLetter, res);
};

const getAllNewsLetter = async (req, res) => {
  // const newsLetter = await NewsLetter.findAll({});
  // res.status(200).send(newsLetter);
  getAllNewsLetterService(req, res);
};

const getSingleNewsLetter = async (req, res) => {
  //   let id = req.params.id;
  //   const newsLetter = await NewsLetter.findOne({ where: { id: id } });
  //   res.status(200).send(newsLetter);
  getSingleNewsLetterService(req, res);
};

const updateNewsLetter = async (req, res) => {
  //   let id = req.params.id;
  //   const newsLetter = await NewsLetter.update(req.body, { where: { id: id } });
  //   res.status(200).send(newsLetter);
  updateNewsLetterService(req, res);
};

const deleteNewsLetter = async (req, res) => {
  //   let id = req.params.id;
  //   await NewsLetter.destroy({ where: { id: id } });
  //   res.status(200).send("Newsletter is Deleted...!");
  deleteNewsLetterService(req, res);
};

module.exports = {
  addNewsLetter,
  getAllNewsLetter,
  getSingleNewsLetter,
  updateNewsLetter,
  deleteNewsLetter,
};
