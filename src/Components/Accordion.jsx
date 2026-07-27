import { useEffect, useRef, useState } from "react";
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
  const cardRef = useRef(null);

  useEffect(() => {
    if (isOpen && cardRef.current) {
      cardRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [isOpen]);

  const getIcon = (label) => {
    switch (label) {
      case "Minimum Balance":
        return <FaWallet className="text-lg text-blue-600 dark:text-blue-400 sm:text-2xl" />;

      case "Monthly Fee":
        return <FaMoneyBillWave className="text-lg text-blue-600 dark:text-blue-400 sm:text-2xl" />;

      case "Loan Limit":
        return <FaUniversity className="text-lg text-blue-600 dark:text-blue-400 sm:text-2xl" />;

      case "Interest":
        return <FaMoneyBillWave className="text-lg text-green-600 dark:text-green-400 sm:text-2xl" />;

      case "Withdrawals":
        return <FaWallet className="text-lg text-orange-600 dark:text-orange-400 sm:text-2xl" />;

      case "Minimum Shares":
        return <FaUniversity className="text-lg text-purple-600 dark:text-purple-400 sm:text-2xl" />;

      case "Price Per Share":
        return <FaMoneyBillWave className="text-lg text-green-600 dark:text-green-400 sm:text-2xl" />;

      case "Returns":
        return <FaMoneyBillWave className="text-lg text-emerald-600 dark:text-emerald-400 sm:text-2xl" />;

      case "Transfer":
        return <FaUniversity className="text-lg text-indigo-600 dark:text-indigo-400 sm:text-2xl" />;

      case "Documents":
        return <FaFileAlt className="text-lg text-blue-600 dark:text-blue-400 sm:text-2xl" />;

      default:
        return <FaInfoCircle className="text-lg text-blue-600 dark:text-blue-400 sm:text-2xl" />;
    }
  };

  return (
    <div
      ref={cardRef}
      className="scroll-mt-24 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg dark:border-slate-700 dark:bg-slate-800 dark:shadow-none"
    >
      {/* Header */}
      <button
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-3 p-4 text-left sm:items-center sm:p-6"
      >
        <div>
          <span className="rounded-full bg-blue-100 px-2.5 py-1 text-[11px] font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 sm:px-3 sm:text-xs">
            {product.type}
          </span>

          <h2 className="mt-2 text-lg font-bold text-slate-800 dark:text-slate-100 sm:mt-3 sm:text-2xl">
            {product.title}
          </h2>

          <p className="mt-1.5 max-w-3xl text-sm text-slate-600 dark:text-slate-400 sm:mt-2 sm:text-base">
            {product.overview}
          </p>
        </div>

        <div className="mt-1 shrink-0 sm:ml-6 sm:mt-0">
          {isOpen ? (
            <FaChevronUp className="text-lg text-slate-500 dark:text-slate-400 sm:text-xl" />
          ) : (
            <FaChevronDown className="text-lg text-slate-500 dark:text-slate-400 sm:text-xl" />
          )}
        </div>
      </button>

      {/* Body */}
      <div
        className={`grid transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden border-t bg-slate-50 dark:border-slate-700 dark:bg-slate-900/60">
          {/* Quick Facts */}
          <div className="p-4 sm:p-6">
            <h3 className="mb-3 text-base font-semibold text-slate-800 dark:text-slate-100 sm:mb-5 sm:text-lg">
              Quick Facts
            </h3>

            <div className="grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-4">
              {product.quickFacts.map((fact, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-xl border bg-white p-3 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:shadow-none sm:block sm:p-5"
                >
                  <div className="shrink-0">{getIcon(fact.label)}</div>

                  <div className="min-w-0 sm:mt-4">
                    <p className="truncate text-xs text-slate-500 dark:text-slate-400 sm:text-sm">
                      {fact.label}
                    </p>

                    <p className="break-words text-sm font-bold leading-tight text-slate-800 dark:text-slate-100 sm:mt-1 sm:text-lg sm:leading-snug">
                      {fact.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Documents */}
          {product.documents.length > 0 && (
            <div className="px-4 pb-4 sm:px-6 sm:pb-6">
              <h3 className="mb-3 text-base font-semibold text-slate-800 dark:text-slate-100 sm:mb-4 sm:text-lg">
                Required Documents
              </h3>

              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                {product.documents.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800 dark:shadow-none sm:gap-3 sm:p-4"
                  >
                    <FaCheckCircle className="shrink-0 text-sm text-green-600 dark:text-green-400 sm:text-base" />

                    <span className="text-sm text-slate-700 dark:text-slate-300 sm:text-base">
                      {doc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* More Details */}
          <div className="border-t bg-white dark:border-slate-700 dark:bg-slate-900">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex w-full items-center justify-between px-4 py-4 text-left text-sm font-semibold text-blue-600 dark:text-blue-400 sm:px-6 sm:py-5 sm:text-base"
            >
              More Details
              {showDetails ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            {showDetails && (
              <div className="px-4 pb-4 sm:px-6 sm:pb-6">
                <ul className="space-y-3 sm:space-y-4">
                  {product.details.map((detail, index) => (
                    <li
                      key={index}
                      className="border-l-4 border-blue-600 pl-3 text-sm leading-6 text-slate-600 dark:border-blue-500 dark:text-slate-400 sm:pl-4 sm:text-base"
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
