import React, { Suspense } from "react";
import TransactionList from "./components/transaction-list";
import TransactionListFallback from "./components/transaction-list-fallback";

const Dashboard = () => {
  return (
    <Suspense fallback={<TransactionListFallback />}>
      <TransactionList />
    </Suspense>
  );
};

export default Dashboard;
