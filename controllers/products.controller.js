const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

module.exports = {
  createProduct: async function (req, res) {
    try {
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
      } = req.body;

      const requiredParams = [
        "code",
        "name",
        "description",
        "price",
        "quantity",
        "inventoryStatus",
        "category",
      ];
      const missingParams = requiredParams.filter(
        (param) => !(param in req.body)
      );

      if (missingParams.length > 0) {
        return res.status(400).json({ error: "Missing parameters" });
      }

      const newProduct = await db.Product.create({
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

      res.status(201).json(newProduct);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  getAllProducts: async function (req, res) {
    try {
      const allProducts = await db.product.findMany();

      res.status(200).json(allProducts);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  getProductById: async function (req, res) {
    try {
      var productId = parseInt(req.params.productId);

      const product = await db.product.findUnique({
        where: {
          id: productId,
        },
      });

      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ message: "Product not found!" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  updateProductById: async function (req, res) {
    try {
      var productId = parseInt(req.params.productId);

      const product = await db.product.findUnique({
        where: {
          id: productId,
        },
      });

      if (!product) {
        return res.status(404).json({ message: "Product not found!" });
      }

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
      } = req.body;

      const requiredParams = [
        "code",
        "name",
        "description",
        "price",
        "quantity",
        "inventoryStatus",
        "category",
      ];
      const missingParams = requiredParams.filter(
        (param) => !(param in req.body)
      );

      if (missingParams.length > 0) {
        return res.status(400).json({ error: "Missing parameters" });
      }

      const updatedProduct = await db.product.update({
        where: {
          id: productId,
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

      return res.status(201).json(updatedProduct);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  deleteProduct: async function (req, res) {
    try {
      var productId = parseInt(req.params.productId);

      const product = await db.product.findUnique({
        where: {
          id: productId,
        },
      });

      if (!product) {
        return res.status(404).json({ message: "Product not found!" });
      }

      const deletedProduct = await db.product.delete({
        where: {
          id: productId,
        },
      });

      if (!deletedProduct) {
        return res.status(500).json({ message: "Product cannot deleted!" });
      }

      return res.status(201).json({ message: "Product deleted" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};
