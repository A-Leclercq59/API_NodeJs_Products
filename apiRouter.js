const express = require("express");

const productController = require("./controllers/products.controller");

exports.router = (function () {
  const apiRouter = express.Router();

  apiRouter.route("/products").post(productController.createProduct);
  apiRouter.route("/products").get(productController.getAllProducts);
  apiRouter.route("/products/:productId").get(productController.getProductById);
  apiRouter
    .route("/products/:productId")
    .patch(productController.updateProductById);
  apiRouter
    .route("/products/:productId")
    .delete(productController.deleteProduct);

  return apiRouter;
})();
