import { Link } from "react-router-dom";
import { FaBoxOpen, FaFileAlt, FaCommentDots } from "react-icons/fa";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <section className="py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 sm:text-4xl md:text-6xl">
              Welcome to K-Unity SACCO
            </h1>

            <p className="mx-auto mt-4 max-w-3xl text-base text-slate-600 dark:text-slate-400 sm:mt-6 sm:text-lg">
              Access our financial products, official forms, and support
              services from one convenient place.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-2 rounded-2xl bg-slate-100 p-2 dark:bg-slate-800/60 sm:mt-16 sm:gap-3 sm:p-3 md:mt-20 md:gap-6 md:bg-transparent md:p-0 md:dark:bg-transparent">
              <div className="min-w-0 rounded-xl bg-white p-3 text-center shadow-sm dark:bg-slate-800 dark:shadow-none sm:p-4">
                <p className="text-xl font-bold text-blue-600 dark:text-blue-400 sm:text-2xl md:text-4xl">
                  4
                </p>

                <p className="mt-1 break-words text-[11px] leading-tight text-slate-500 dark:text-slate-400 sm:text-xs md:mt-2 md:text-sm">
                  Financial products
                </p>
              </div>

              <div className="min-w-0 rounded-xl bg-white p-3 text-center shadow-sm dark:bg-slate-800 dark:shadow-none sm:p-4">
                <p className="text-xl font-bold text-blue-600 dark:text-blue-400 sm:text-2xl md:text-4xl">
                  10+
                </p>

                <p className="mt-1 break-words text-[11px] leading-tight text-slate-500 dark:text-slate-400 sm:text-xs md:mt-2 md:text-sm">
                  Downloadable forms
                </p>
              </div>

              <div className="min-w-0 rounded-xl bg-white p-3 text-center shadow-sm dark:bg-slate-800 dark:shadow-none sm:p-4">
                <p className="text-xl font-bold text-blue-600 dark:text-blue-400 sm:text-2xl md:text-4xl">
                  24/7
                </p>

                <p className="mt-1 break-words text-[11px] leading-tight text-slate-500 dark:text-slate-400 sm:text-xs md:mt-2 md:text-sm">
                  Online support
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-5 sm:mt-16 sm:gap-8 md:mt-20 md:grid-cols-3">
            <Link
              to="/products"
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl dark:border-slate-700 dark:from-slate-800 dark:to-slate-900 dark:shadow-none dark:hover:border-blue-700 sm:p-8"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400 sm:mb-6 sm:h-14 sm:w-14">
                <FaBoxOpen className="text-xl sm:text-2xl" />
              </div>

              <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 sm:text-2xl">
                Products
              </h2>

              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 sm:mt-3 sm:text-base">
                Explore savings accounts, shares and other financial
                products.
              </p>

              <div className="mt-5 flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 sm:mt-6 sm:text-base">
                Learn more
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>

              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-blue-50 transition group-hover:scale-125 dark:bg-blue-900/20" />
            </Link>

            <Link
              to="/forms"
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl dark:border-slate-700 dark:from-slate-800 dark:to-slate-900 dark:shadow-none dark:hover:border-blue-700 sm:p-8"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400 sm:mb-6 sm:h-14 sm:w-14">
                <FaFileAlt className="text-xl sm:text-2xl" />
              </div>

              <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 sm:text-2xl">
                Forms
              </h2>

              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 sm:mt-3 sm:text-base">
                Complete and download official SACCO application forms.
              </p>

              <div className="mt-5 flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 sm:mt-6 sm:text-base">
                Open forms
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>

              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-blue-50 transition group-hover:scale-125 dark:bg-blue-900/20" />
            </Link>

            <Link
              to="/feedback"
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl dark:border-slate-700 dark:from-slate-800 dark:to-slate-900 dark:shadow-none dark:hover:border-blue-700 sm:p-8"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400 sm:mb-6 sm:h-14 sm:w-14">
                <FaCommentDots className="text-xl sm:text-2xl" />
              </div>

              <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 sm:text-2xl">
                Feedback
              </h2>

              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 sm:mt-3 sm:text-base">
                Report issues, ask questions or send suggestions to our team.
              </p>

              <div className="mt-5 flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 sm:mt-6 sm:text-base">
                Contact us
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>

              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-blue-50 transition group-hover:scale-125 dark:bg-blue-900/20" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
