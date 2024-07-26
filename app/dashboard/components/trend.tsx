import Trend, { TrendProps } from "@/components/trend";

const Trending = async ({ type }: { type: TrendProps["type"] }) => {
  const response = await fetch(`http://localhost:3003/trends/${type}`);

  const { amount, prevAmount } = await response.json();
  return <Trend type={type} amount={amount} prevAmount={prevAmount} />;
};

export default Trending;
