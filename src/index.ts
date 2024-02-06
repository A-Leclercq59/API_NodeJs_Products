import cors from "cors";
import express from "express";

import { productRouter } from "./api/product/product.router";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/products", productRouter);

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
