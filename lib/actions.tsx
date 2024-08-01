"use server";

import { revalidateTag } from "next/cache";
import { createClient } from "./supabase/server";

export async function PurgeTransactionListCache() {
  revalidateTag("transaction-list");
}

export async function createTransaction(formData) {
  console.log("formData", formData);

  const { error } = await createClient().from("transactions").insert(formData);
}
