import { z } from "zod";
import { categories, types } from "./consts";

export const TransactionSchema = z.object({
  type: z.enum(types),
  category: z.enum(categories),
  amount: z.coerce
    .number({ message: "Input a valid number" })
    .min(1, { message: "Amount must be at least 1" }),
  description: z.string().min(1, { message: "Description must be at least 1" }),
  created_at: z.string().refine(
    (val: string) => {
      return !isNaN(Date.parse(val));
    },
    {
      message: "Invalid date format",
    }
  ),
});

export type FormFieldTransaction = z.infer<typeof TransactionSchema>;
