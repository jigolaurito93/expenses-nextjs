import TransactionForm from "@/components/transaction-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add Transaction",
};

const AddTransaction = () => {
  return (
    <div className="h-screen">
      <div className="text-4xl font-semibold my-8">Add Transaction</div>
      <TransactionForm />
    </div>
  );
};

export default AddTransaction;
