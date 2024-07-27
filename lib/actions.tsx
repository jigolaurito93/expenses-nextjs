'use server';

import { revalidateTag } from "next/cache";

export async function PurgeTransactionListCache() {
  revalidateTag("transaction-list");
}
