const express = require("express");

const productController = require("./controllers/products.controller");

exports.router = (function () {
  const apiRouter = express.Router();

  apiRouter.route("/products").post(productController.createProduct);
  apiRouter.route("/products").get(productController.getAllProducts);

  return apiRouter;
})();
