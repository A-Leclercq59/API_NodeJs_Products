import { z } from "zod";

export const productSchema = z.object({
  body: z.object({
    code: z.string({
      required_error: "Code is required",
    }),
    name: z.string({
      required_error: "Name is required",
    }),
    description: z.string({
      required_error: "Description is required",
    }),
    price: z.number({
      required_error: "Price is required",
    }),
    quantity: z.number({
      required_error: "Quantity is required",
    }),
    inventoryStatus: z.string({
      required_error: "InventoryStatus is required",
    }),
    category: z.string({
      required_error: "Category is required",
    }),
    image: z.optional(z.string()),
    rating: z.optional(z.number()),
  }),
});
