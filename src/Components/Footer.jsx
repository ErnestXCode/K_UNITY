import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-blue-100 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-4 py-6 text-center sm:flex-row sm:justify-between sm:px-6 sm:text-left">
        <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
          K-Unity <span className="text-blue-600 dark:text-blue-400">SACCO</span>
        </p>

        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-slate-500 dark:text-slate-400 sm:justify-end">
          <Link
            to="/products"
            className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
          >
            Products
          </Link>
          <Link
            to="/forms"
            className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
          >
            Forms
          </Link>
          <Link
            to="/feedback"
            className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
          >
            Feedback
          </Link>
        </nav>
      </div>

      <div className="border-t border-slate-100 px-4 py-4 text-center text-xs text-slate-400 dark:border-slate-800 dark:text-slate-500 sm:px-6">
        © {new Date().getFullYear()} K-Unity SACCO. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
