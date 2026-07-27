import { useState } from "react";
import Accordion from "../Components/Accordion";
import products from "../Data/products";
import { Landmark } from "lucide-react";

function Products() {
  const [openId, setOpenId] = useState(0);
  const [filter, setFilter] = useState("Individual Accounts");

  const handleToggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  const filters = [
    "Individual Accounts",
    "Group Accounts",
    "Salary Loans",
    "Agriculture Loans",
    "Business Loans",
    "Group Loans",
  ];

  const filteredProducts = products.filter((product) => {
    switch (filter) {
      case "Individual Accounts":
        return [
          "Akiba Account",
          "Boresha Account",
          "Jijenge Account",
          "School Fees Account",
          "Watoto Account",
          "Holiday Savings Account",
          "Imarisha Account",
          "Benevolent Fund",
        ].includes(product.title);

      case "Group Accounts":
        return [
          "Shirika Savings Account",
          "Chama Savings",
          "MFI Member Savings",
        ].includes(product.title);

      case "Salary Loans":
        return [
          "Salary Loan - Unsecured",
          "Salary Loan - Secured",
          "Salary Advance",
          "UniLoan",
        ].includes(product.title);

      case "Agriculture Loans":
        return [
          "Kilimo Loan",
          "Kilimo Loan - Secured",
          "Kilimo Advance",
          "Mifugo Loan",
          "Tea Bonus Advance",
        ].includes(product.title);

      case "Business Loans":
        return [
          "SME Loan - Unsecured",
          "SME Loan - Secured",
          "Trade Financing",
          "Overdraft Loan",
          "Asset Finance Loan",
          "Insurance Premium Financing",
        ].includes(product.title);

      case "Group Loans":
        return [
          "Group Loan",
          "Chama Loan",
          "Society Development Loan",
          "Jijenge Loan",
        ].includes(product.title);

      default:
        return true;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 px-4 py-10 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:px-6 sm:py-16">
      <section className="mx-auto w-full max-w-6xl">
        <div className="mb-8 text-center sm:mb-12">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-200 dark:bg-blue-500 dark:shadow-none">
            <Landmark size={22} strokeWidth={2} />
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
            Our Products
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-500 dark:text-slate-400 sm:mt-4 sm:text-lg">
            Explore our range of current accounts, savings products and loan
            facilities designed to meet your financial goals.
          </p>

          {/* Filters */}
          <div className="mt-8 flex justify-center gap-3 overflow-x-auto pb-2">
            {filters.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setFilter(item);
                  setOpenId(null);
                }}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition ${
                  filter === item
                    ? "bg-blue-600 text-white shadow-md dark:bg-blue-500"
                    : "border border-slate-200 bg-white text-slate-700 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4 sm:space-y-5">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Accordion
                key={product.id}
                product={product}
                isOpen={openId === product.id}
                onToggle={() => handleToggle(product.id)}
              />
            ))
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center dark:border-slate-700 dark:bg-slate-800">
              <p className="text-slate-500 dark:text-slate-400">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Products;