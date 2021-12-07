const { fetchCategories } = require("../models/categoriesModels");
exports.getCategories = async (req, res) => {
  try {
    const response = await fetchCategories();
    console.log(response);
  } catch {
    console.log("error in controller");
  }
};
