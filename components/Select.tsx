import React from "react";

const Select = ({ children }: { children: React.ReactNode }) => {
  return (
    <select className="w-full rounded-md shadow-sm border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-950">
      {children}
    </select>
  );
};

export default Select;
