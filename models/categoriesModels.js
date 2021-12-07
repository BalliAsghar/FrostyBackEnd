const Category = require("../config/databaseConfig/category.schema.js");

exports.fetchCategories = async () => {
  try {
    const categories = await Category.find({});
    if (categories.length > 0) return categories;

    return Promise.reject({ status: 404, message: "No categories found" });
  } catch (err) {
    return Promise.reject(err);
  }
};

exports.fetchCategoryById = async (id) => {
  try {
    const category = await Category.findById(id);
    if (category) return category;

    return Promise.reject({ status: 404, message: "No category found" });
  } catch (err) {
    return Promise.reject(err);
  }
};
