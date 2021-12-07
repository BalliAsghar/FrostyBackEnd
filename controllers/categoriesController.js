const { fetchCategories } = require("../models/categoriesModels");
exports.getCategories = async (req, res) => {
  try {
    const categories = await fetchCategories();
    res.status(200).send({ categories });
  } catch {
    console.log("error in controller");
  }
};
