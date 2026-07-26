import { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaCheckCircle,
  FaMoneyBillWave,
  FaWallet,
  FaUniversity,
  FaFileAlt,
  FaInfoCircle,
} from "react-icons/fa";

function Accordion({ product, isOpen, onToggle }) {
  const [showDetails, setShowDetails] = useState(false);

  const getIcon = (label) => {
    switch (label) {
      case "Minimum Balance":
        return <FaWallet className="text-2xl text-blue-600" />;

      case "Monthly Fee":
        return <FaMoneyBillWave className="text-2xl text-blue-600" />;

      case "Loan Limit":
        return <FaUniversity className="text-2xl text-blue-600" />;

      case "Interest":
        return <FaMoneyBillWave className="text-2xl text-green-600" />;

      case "Withdrawals":
        return <FaWallet className="text-2xl text-orange-600" />;

      case "Minimum Shares":
        return <FaUniversity className="text-2xl text-purple-600" />;

      case "Price Per Share":
        return <FaMoneyBillWave className="text-2xl text-green-600" />;

      case "Returns":
        return <FaMoneyBillWave className="text-2xl text-emerald-600" />;

      case "Transfer":
        return <FaUniversity className="text-2xl text-indigo-600" />;

      case "Documents":
        return <FaFileAlt className="text-2xl text-blue-600" />;

      default:
        return <FaInfoCircle className="text-2xl text-blue-600" />;
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg">
      {/* Header */}
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between p-6 text-left"
      >
        <div>
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
            {product.type}
          </span>

          <h2 className="mt-3 text-2xl font-bold text-slate-800">
            {product.title}
          </h2>

          <p className="mt-2 max-w-3xl text-slate-600">{product.overview}</p>
        </div>

        <div className="ml-6">
          {isOpen ? (
            <FaChevronUp className="text-xl text-slate-500" />
          ) : (
            <FaChevronDown className="text-xl text-slate-500" />
          )}
        </div>
      </button>

      {/* Body */}
      <div
        className={`grid transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden border-t bg-slate-50">
          {/* Quick Facts */}
          <div className="p-6">
            <h3 className="mb-5 text-lg font-semibold text-slate-800">
              Quick Facts
            </h3>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {product.quickFacts.map((fact, index) => (
                <div
                  key={index}
                  className="rounded-xl border bg-white p-5 shadow-sm"
                >
                  {getIcon(fact.label)}

                  <p className="mt-4 text-sm text-slate-500">{fact.label}</p>

                  <p className="mt-1 text-lg font-bold text-slate-800">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Documents */}
          {product.documents.length > 0 && (
            <div className="px-6 pb-6">
              <h3 className="mb-4 text-lg font-semibold text-slate-800">
                Required Documents
              </h3>

              <div className="grid gap-3 sm:grid-cols-2">
                {product.documents.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm"
                  >
                    <FaCheckCircle className="text-green-600" />

                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* More Details */}
          <div className="border-t bg-white">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex w-full items-center justify-between px-6 py-5 text-left font-semibold text-blue-600"
            >
              More Details
              {showDetails ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            {showDetails && (
              <div className="px-6 pb-6">
                <ul className="space-y-4">
                  {product.details.map((detail, index) => (
                    <li
                      key={index}
                      className="border-l-4 border-blue-600 pl-4 text-slate-600 leading-6"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
