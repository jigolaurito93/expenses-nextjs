import { z } from "zod";
import { categories, types } from "./consts";

interface consts {
  types: string[];
  categories: string[];
}

export const TransactionSchema = z.object({
  type: z.enum(["Income", "Expense", "Investment", "Saving"]),
  category: z.enum([
    "Housing",
    "Transport",
    "Health",
    "Food",
    "Education",
    "Other",
  ]),
  amount: z.number().min(1, { message: "Amount must be at least 1" }),
  description: z.string().min(1, { message: "Description must be at least 1" }),
  create_at: z.string().refine((val) => {
    !isNaN(Date.parse(val));
  }),
});
