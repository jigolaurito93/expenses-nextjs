import { z } from "zod";
import { categories, types } from "./consts";

export const TransactionSchema = z.object({
  type: z.enum(types),
  category: z.enum(categories),
  amount: z.coerce
    .number({ message: "Input a valid number" })
    .min(1, { message: "Amount must be at least 1" }),
  description: z.string().min(1, { message: "Description must be at least 1" }),
  create_at: z.string().refine(
    (val: string) => {
      // Check if the format is MM-DD-YYYY
      const regex = /^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-\d{4}$/;
      if (!regex.test(val)) {
        return false;
      }
      // Check if the date is valid
      return !isNaN(Date.parse(val));
    },
    {
      message: "Invalid date format",
    }
  ),
});
