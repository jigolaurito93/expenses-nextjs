import TransactionItem from "@/components/transaction-item";

export default async function TransactionList() {
  interface TransactionProps {
    type: string;
    category: string;
    description: string;
    amount: number;
  }

  const response = await fetch("http://localhost:3003/transactions");
  const transactions = await response.json();
  console.log(transactions);

  return (
    <section className="space-y-4">
      {transactions.map((transaction: TransactionProps) => {
        const { type, category, description, amount } = transaction;
        return (
          <div>
            <TransactionItem
              type={type}
              category={category}
              description={description}
              amount={amount}
            />
          </div>
        );
      })}
    </section>
  );
}
