const categoriesRouter = require("express").Router();
const { getCategories } = require("../controllers/categoriesController");
const {
  handleWrongMethods,
  handleWrongUrls,
} = require("../errors/endpoint-errors");

categoriesRouter // GET - /api/categories
  .route("/")
  .get(getCategories)
  .all(handleWrongMethods);

categoriesRouter.route("*").all(handleWrongUrls);

module.exports = categoriesRouter;
