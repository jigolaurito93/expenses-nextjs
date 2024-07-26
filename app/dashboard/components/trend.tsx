import Trend, { TrendProps } from "@/components/trend";

const Trending = async ({ type }: { type: TrendProps["type"] }) => {
  const response = await fetch(`${process.env.API_URL}/trends/${type}`);

  const { amount, prevAmount } = await response.json();
  return <Trend type={type} amount={amount} prevAmount={prevAmount} />;
};

export default Trending;
