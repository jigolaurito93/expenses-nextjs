import { PlusCircle } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="h-screen">
      <div className="my-8">
        <div className="text-4xl font-semibold">Summary</div>
      </div>

      <div className="flex items-center justify-between mb-8">
        <div className="text-2xl">Transactions</div>
        <Link
          href="/dashboard/transaction/add"
          className={`flex items-center space-x-1`}
        >
          <PlusCircle className="w-4 h-4" />
          <div>Add</div>
        </Link>
      </div>
    </div>
  );
}
