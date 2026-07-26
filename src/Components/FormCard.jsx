import { Link } from "react-router-dom";
import { FileText, ArrowRight } from "lucide-react";

function FormCard({ title, description, slug }) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/60 sm:p-6">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-150 group-hover:bg-blue-100">
        <FileText size={20} strokeWidth={1.75} />
      </div>

      <h2 className="mb-1.5 text-lg font-semibold text-slate-900 sm:text-xl">
        {title}
      </h2>

      <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-500 sm:text-base">
        {description}
      </p>

      <Link
        to={`/forms/${slug}`}
        className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-all duration-150 hover:bg-blue-700 active:scale-[0.98] sm:w-auto"
      >
        Open form
        <ArrowRight
          size={16}
          className="transition-transform duration-150 group-hover:translate-x-0.5"
        />
      </Link>
    </div>
  );
}

export default FormCard;
