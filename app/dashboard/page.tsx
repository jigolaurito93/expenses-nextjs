import React, { Suspense } from "react";
import TransactionList from "./components/transaction-list";
import TransactionListFallback from "./components/transaction-list-fallback";
import Trend from "./components/trend";
import Trending from "./components/trend";
import TrendFallback from "./components/trend-fallback";

const Dashboard = () => {
  return (
    <>
      <section className="mb-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
        <Suspense fallback={<TrendFallback />}>
          <Trending type="Income" />
        </Suspense>
        <Suspense fallback={<TrendFallback />}>
          <Trending type="Expense" />
        </Suspense>
        <Suspense fallback={<TrendFallback />}>
          <Trending type="Investment" />
        </Suspense>
        <Suspense fallback={<TrendFallback />}>
          <Trending type="Saving" />
        </Suspense>
      </section>
      <Suspense fallback={<TransactionListFallback />}>
        <TransactionList />
      </Suspense>
    </>
  );
};

export default Dashboard;
