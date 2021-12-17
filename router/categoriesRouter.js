const categoriesRouter = require("express").Router();
const {
  getCategories,
  getCategoryById,
} = require("../controllers/categoriesController");

/**
 * @Method GET
 * @Route /api/categories
 * @Description Get all categories
 * @Function getCategories
 */
categoriesRouter.get("/", getCategories);

/**
 * @Method GET
 * @Route /api/categories/:categoryId
 * @Description Get a category by id
 * @Function getCategoryById
 * @Param {String} categoryId
 */

categoriesRouter.get("/:categoryId", getCategoryById);

module.exports = categoriesRouter;
