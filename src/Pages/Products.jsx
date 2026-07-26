import { useState } from "react";
import Accordion from "../Components/Accordion";
import products from "../Data/products";

function Products() {
  const [openId, setOpenId] = useState(0);

  const handleToggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">

      <div className="mb-12 text-center">

        <h1 className="text-4xl font-bold text-slate-800">
          Our Products
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          Explore our range of current accounts, savings products,
          and investment opportunities designed to meet your financial goals.
        </p>

      </div>

      <div className="space-y-5">
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
  );
}

export default Products;