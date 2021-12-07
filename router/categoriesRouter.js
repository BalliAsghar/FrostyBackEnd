const categoriesRouter = require("express").Router();
const { getCategories } = require("../controllers/categoriesController");

/**
 * @Method GET
 * @Route /api/categories
 * @Description Get all categories
 * @Function getCategories
 */
categoriesRouter.get("/", getCategories);

module.exports = categoriesRouter;
