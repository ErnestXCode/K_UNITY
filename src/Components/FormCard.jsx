import { Link } from "react-router-dom";

function FormCard({ title, description, slug }) {
    return (
        <div className="rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-md">
            <h2 className="mb-2 text-xl font-semibold">
                {title}
            </h2>

            <p className="mb-5 text-slate-600">
                {description}
            </p>

            <Link
                to={`/forms/${slug}`}
                className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
                Open Form
            </Link>
        </div>
    );
}

export default FormCard;