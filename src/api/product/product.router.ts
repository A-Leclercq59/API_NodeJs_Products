import type { Request, Response } from "express";
import express from "express";

import { validate } from "../../middlewares/validate";
import { productSchema } from "./product.schema";
import * as ProductService from "./product.service";

export const productRouter = express.Router();

// GET: List of all products
productRouter.get("/", async (request: Request, response: Response) => {
  try {
    const products = await ProductService.getAllProducts();
    return response.status(200).json(products);
  } catch (error: any) {
    return response.status(500).json(error.message);
  }
});

// GET: Get product by id
productRouter.get("/:id", async (request: Request, response: Response) => {
  const id = parseInt(request.params.id);

  try {
    const product = await ProductService.getProductById(id);

    if (!product) {
      return response.status(404).json({ error: "Product not found!" });
    }

    return response.status(200).json(product);
  } catch (error: any) {
    return response.status(500).json(error.message);
  }
});

// POST: Create a product
productRouter.post(
  "/",
  validate(productSchema),
  async (request: Request, response: Response) => {
    try {
      const product = await ProductService.createProduct(request.body);
      return response.status(201).json(product);
    } catch (error: any) {
      return response.status(500).json(error.message);
    }
  }
);

// PATCH: Update a product
productRouter.patch(
  "/:id",
  validate(productSchema),
  async (request: Request, response: Response) => {
    const id = parseInt(request.params.id);

    try {
      const product = await ProductService.getProductById(id);

      if (!product) {
        return response.status(404).json({ error: "Product not found!" });
      }

      const productUpdated = await ProductService.updateProduct(
        request.body,
        id
      );

      return response.status(200).json(productUpdated);
    } catch (error: any) {
      return response.status(500).json(error.message);
    }
  }
);

// DELETE: Delete a product
productRouter.delete("/:id", async (request: Request, response: Response) => {
  const id = parseInt(request.params.id);

  try {
    const product = await ProductService.getProductById(id);

    if (!product) {
      return response.status(404).json({ error: "Product not found!" });
    }

    await ProductService.deleteProduct(id);

    return response.status(200).json({ message: "Product deleted" });
  } catch (error: any) {
    return response.status(500).json(error.message);
  }
});
