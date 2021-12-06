const categoriesRouter = require("express").Router();
const { getCategories } = require("../controllers/categoriesController");

categoriesRouter // GET - /api/categories
  .route("/")
  .get(getCategories);

module.exports = categoriesRouter;
