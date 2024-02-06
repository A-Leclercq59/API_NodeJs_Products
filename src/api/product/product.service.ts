import { Product } from "@prisma/client";

import { db } from "../../utils/db.server";

export const getAllProducts = async () => {
  return db.product.findMany();
};

export const getProductById = async (id: number) => {
  return db.product.findUnique({
    where: {
      id,
    },
  });
};

export const createProduct = async (product: Product) => {
  const {
    code,
    name,
    description,
    price,
    quantity,
    inventoryStatus,
    category,
    image,
    rating,
  } = product;

  return db.product.create({
    data: {
      code,
      name,
      description,
      price,
      quantity,
      inventoryStatus,
      category,
      image,
      rating,
    },
  });
};

export const updateProduct = async (product: Product, id: number) => {
  const {
    code,
    name,
    description,
    price,
    quantity,
    inventoryStatus,
    category,
    image,
    rating,
  } = product;

  return db.product.update({
    where: {
      id,
    },
    data: {
      code,
      name,
      description,
      price,
      quantity,
      inventoryStatus,
      category,
      image,
      rating,
    },
  });
};

export const deleteProduct = (id: number) => {
  return db.product.delete({
    where: {
      id,
    },
  });
};
