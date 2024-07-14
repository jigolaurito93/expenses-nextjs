import { HandCoins } from "lucide-react";

interface TransactionItemProps {
  type: string;
  category: string;
  description: string;
  amount: number;
}

const iconMap = {
  Income: {
    icon: HandCoins,
    color: "text-green-500 darl:text-green-400",
  },
  Income: {
    icon: HandCoins,
    color: "text-red-500 darl:text-red-400",
  },
};

const TransactionItem = ({
  type,
  category,
  description,
  amount,
}: TransactionItemProps) => {
  return (
    <div className="w-full flex items-center">
      <div>{description}</div>
      <div></div>
      <div>{amount}</div>
      <div>...</div>
    </div>
  );
};

export default TransactionItem;
