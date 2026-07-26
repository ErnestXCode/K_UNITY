import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="py-32 text-center">

            <h1 className="mb-4 text-7xl font-bold">
                404
            </h1>

            <p className="mb-8 text-gray-600">
                The page you requested does not exist.
            </p>

            <Link
                to="/"
                className="rounded-lg bg-blue-600 px-6 py-3 text-white"
            >
                Return Home
            </Link>

        </div>
    );
}

export default NotFound;