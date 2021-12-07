const {
  fetchCategories,
  fetchCategoryById,
} = require("../models/categoriesModels");

exports.getCategories = async (req, res, next) => {
  try {
    const categories = await fetchCategories();
    res.status(200).send({ categories });
  } catch (err) {
    next(err);
  }
};

exports.getCategoryById = async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    const category = await fetchCategoryById(categoryId);
    res.status(200).send({ category });
  } catch (err) {
    next(err);
  }
};
