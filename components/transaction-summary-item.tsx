import { useFormatCurrency } from "@/app/hooks/use-format-currency";

interface SummaryProp {
  date: string;
  amount: number;
}

const TransactionSummaryItem = ({ date, amount }: SummaryProp) => {
  const formattedAmount = useFormatCurrency(amount);
  return (
    <div className="flex text-gray-500 dark:text-gray-400 font-semibold">
      <div className="grow">{date}</div>
      <div className="min-w-[70px] text-right font-semibold">
        {formattedAmount}
      </div>
      <div className="min-w-[50px]"></div>
    </div>
  );
};

export default TransactionSummaryItem;
