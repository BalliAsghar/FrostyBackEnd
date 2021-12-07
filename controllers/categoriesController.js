const { fetchCategories } = require("../models/categoriesModels");

exports.getCategories = async (req, res, next) => {
  try {
    const categories = await fetchCategories();
    res.status(200).send({ categories });
  } catch (err) {
    next(err);
  }
};
