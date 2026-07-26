import { Link } from "react-router-dom";
import { FaBoxOpen, FaFileAlt, FaCommentDots } from "react-icons/fa";

function Home() {
    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-6xl px-6">

                <div className="text-center">

                    <h1 className="text-4xl font-bold text-slate-800 md:text-6xl">
                        Welcome to K-Unity SACCO
                    </h1>

                    <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
                        Access our financial products, official forms,
                        and support services from one convenient place.
                    </p>

                    <div className="mt-12 grid gap-4 sm:grid-cols-3">

  <div className="rounded-xl border bg-white p-6 text-center shadow-sm">
    <p className="text-3xl font-bold text-blue-600">4</p>
    <p className="mt-2 text-slate-600">
      Financial Products
    </p>
  </div>

  <div className="rounded-xl border bg-white p-6 text-center shadow-sm">
    <p className="text-3xl font-bold text-blue-600">Official</p>
    <p className="mt-2 text-slate-600">
      Printable Forms
    </p>
  </div>

  <div className="rounded-xl border bg-white p-6 text-center shadow-sm">
    <p className="text-3xl font-bold text-blue-600">24/7</p>
    <p className="mt-2 text-slate-600">
      Feedback Submission
    </p>
  </div>

</div>
                </div>

                <div className="mt-20 grid gap-6 md:grid-cols-3">

                    <Link
                        to="/products"
                        className="rounded-xl border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                    >
                        <FaBoxOpen className="mb-4 text-3xl text-blue-600" />

                        <h2 className="mb-2 text-xl font-semibold">
                            Products
                        </h2>

                        <p className="text-slate-600">
                            Explore our savings accounts, loans, and other financial products.
                        </p>
                    </Link>

                    <Link
                        to="/forms"
                        className="rounded-xl border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                    >
                        <FaFileAlt className="mb-4 text-3xl text-blue-600" />

                        <h2 className="mb-2 text-xl font-semibold">
                            Forms
                        </h2>

                        <p className="text-slate-600">
                            Access and download official SACCO application forms.
                        </p>
                    </Link>

                    <Link
                        to="/feedback"
                        className="rounded-xl border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                    >
                        <FaCommentDots className="mb-4 text-3xl text-blue-600" />

                        <h2 className="mb-2 text-xl font-semibold">
                            Feedback
                        </h2>

                        <p className="text-slate-600">
                            Report issues or send feedback directly to our team.
                        </p>
                    </Link>

                </div>

            </div>
        </section>
    );
}

export default Home;