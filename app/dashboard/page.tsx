import React, { Suspense } from "react";
import TransactionList from "./components/transaction-list";
import TransactionListFallback from "./components/transaction-list-fallback";
import Trend from "./components/trend";
import Trending from "./components/trend";

const Dashboard = () => {
  return (
    <>
      <section className="mb-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
        <Suspense>
          <Trending type="Income" />
        </Suspense>
        <Suspense>
          <Trending type="Expense" />
        </Suspense>
        <Suspense>
          <Trending type="Investment" />
        </Suspense>
        <Suspense>
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
