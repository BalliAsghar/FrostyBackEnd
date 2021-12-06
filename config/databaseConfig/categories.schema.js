const mongoose = require("mongoose");

const CategoriesSchema = mongoose.Schema({
  categorySlug: { type: String },
});

module.exports = Category = mongoose.model("Categories", CategoriesSchema);
