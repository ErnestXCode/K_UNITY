import { useState } from "react";
import Accordion from "../Components/Accordion";
import products from "../Data/products";
import { Landmark } from "lucide-react";

function Products() {
  const [openId, setOpenId] = useState(0);

  const handleToggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 px-4 py-10 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:px-6 sm:py-16">
      <section className="mx-auto w-full max-w-6xl">
        <div className="mb-8 text-center sm:mb-12">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-200 dark:bg-blue-500 dark:shadow-none">
            <Landmark size={22} strokeWidth={2} />
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
            Our products
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-500 dark:text-slate-400 sm:mt-4 sm:text-lg">
            Explore our range of current accounts, savings products, and
            investment opportunities designed to meet your financial goals.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-5">
          {products.map((product) => (
            <Accordion
              key={product.id}
              product={product}
              isOpen={openId === product.id}
              onToggle={() => handleToggle(product.id)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Products;
