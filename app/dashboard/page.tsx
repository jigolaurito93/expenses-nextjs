import React, { Suspense } from "react";
import TransactionList from "./components/transaction-list";
import TransactionListFallback from "./components/transaction-list-fallback";
import Trending from "./components/trend";
import TrendFallback from "./components/trend-fallback";
import { ErrorBoundary } from "react-error-boundary";
import { types } from "@/app/data/consts"; // Correct import

const Dashboard = async () => {
  return (
    <div>
      <section className="mb-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {types.map((type, index) => (
          // ErrorBoundary to render error message without crashing the app
          <ErrorBoundary
            key={index}
            fallback={
              <div className="text-red-500">Cannot fetch {type} trend data</div>
            }
          >
            <Suspense fallback={<TrendFallback />}>
              <Trending type={type} />
            </Suspense>
          </ErrorBoundary>
        ))}
      </section>
      <Suspense fallback={<TransactionListFallback />}>
        <TransactionList />
      </Suspense>
    </div>
  );
};

export default Dashboard;
