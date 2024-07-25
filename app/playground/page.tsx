import Input from "@/components/Input";
import Label from "@/components/Label";
import PageHeader from "@/components/page-header";
import Select from "@/components/Select";
import TransactionItem from "@/components/transaction-item";
import TransactionSummaryItem from "@/components/transaction-summary-item";
import Trend from "@/components/trend";

export default function Page() {
  return (
    <main className="space-y-8 pb-20">
      <h1 className="text-4xl mt-8">Playground</h1>

      <div>
        <h2 className="mb-4 text-lg font-mono">PageHeader</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800" />
        <div>
          <PageHeader className="mb-2" />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">Trend</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800" />
        <div className="flex space-x-4">
          <Trend type="Income" amount={1000} prevAmount={900} />
          <Trend type="Expense" amount={12000} prevAmount={10000} />
          <Trend type="Investment" amount={7000} prevAmount={11100} />
          <Trend type="Saving" amount={500} prevAmount={950} />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">Transaction Item</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800" />
        <div className="space-y-4">
          <TransactionItem
            type="Income"
            category="Salary"
            description="Paycheck"
            amount={1000}
          />
          <TransactionItem
            type="Expense"
            category="Food"
            description="Going out to eat"
            amount={50}
          />
          <TransactionItem
            type="Saving"
            category=""
            description="For Children"
            amount={500}
          />
          <TransactionItem
            type="Investment"
            category="Stocks"
            description="In Microsoft"
            amount={2000}
          />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">
          Transaction + Transaction Summary
        </h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800" />
        <div className="space-y-4">
          <TransactionSummaryItem date="2024-07-14" amount={4000} />
          <hr className="mb-4 border-gray-200 dark:border-gray-800" />
          <TransactionItem
            type="Income"
            category="Salary"
            description="Paycheck"
            amount={1000}
          />
          <TransactionItem
            type="Expense"
            category="Food"
            description="Going out to eat"
            amount={50}
          />
          <TransactionItem
            type="Saving"
            category=""
            description="For Children"
            amount={500}
          />
          <TransactionItem
            type="Investment"
            category="Stocks"
            description="In Micrsoft"
            amount={2000}
          />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">Forms</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800" />
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Your name</Label>
            <Input type="text" placeholder="Your name here.." />
          </div>
          <div>
            <Label>City</Label>
            <Select>
              <option>Paranaque</option>
              <option>Makati</option>
              <option>Muntinlupa</option>
            </Select>
          </div>

          <div className="flex items-center">
            <Input type="checkbox" id="city" />
            <Label htmlFor="city" className="ml-1">
              City
            </Label>
          </div>
        </div>
      </div>
    </main>
  );
}
