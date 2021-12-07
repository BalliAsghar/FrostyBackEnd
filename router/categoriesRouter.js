const categoriesRouter = require("express").Router();
const { getCategories } = require("../controllers/categoriesController");
const {
  handleWrongMethods,
  handleWrongUrls,
} = require("../errors/endpoint-errors");

/**
 * @Method GET
 * @Route /api/categories
 * @Description Get all categories
 * @Function getCategories
 */
categoriesRouter.get("/", getCategories);

/**
 * @Method REST (POST, PUT, DELETE, PATCH)
 * @Route /api/categories
 * @Description Handle wrong methods
 * @Function handleWrongMethods
 */
// categoriesRouter.route("*").all(handleWrongUrls);

module.exports = categoriesRouter;
