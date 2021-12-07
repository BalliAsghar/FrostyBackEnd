const Category = require("../config/databaseConfig/category.schema.js");

exports.fetchCategories = async () => {
  try {
    const categories = await Category.find({});
    return categories;
  } catch {
    console.log("error in model");
  }
};
