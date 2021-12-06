const { fetchCategories } = require("../models/categoriesModels");
exports.getCategories = (req, res) => {
  fetchCategories();
};
