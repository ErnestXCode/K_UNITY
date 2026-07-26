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
            Access our financial products, official forms, and support services
            from one convenient place.
          </p>

          <div className="mt-16 grid grid-cols-3 gap-3 rounded-2xl bg-slate-100 p-3 md:mt-20 md:gap-6 md:bg-transparent md:p-0">

  <div className="rounded-xl bg-white p-4 text-center shadow-sm">
    <p className="text-2xl font-bold text-blue-600 md:text-4xl">
      4
    </p>

    <p className="mt-1 text-xs text-slate-500 md:mt-2 md:text-sm">
      Financial Products
    </p>
  </div>

  <div className="rounded-xl bg-white p-4 text-center shadow-sm">
    <p className="text-2xl font-bold text-blue-600 md:text-4xl">
      10+
    </p>

    <p className="mt-1 text-xs text-slate-500 md:mt-2 md:text-sm">
      Downloadable Forms
    </p>
  </div>

  <div className="rounded-xl bg-white p-4 text-center shadow-sm">
    <p className="text-2xl font-bold text-blue-600 md:text-4xl">
      24/7
    </p>

    <p className="mt-1 text-xs text-slate-500 md:mt-2 md:text-sm">
      Online Support
    </p>
  </div>

</div>
        </div>

       <div className="mt-20 grid gap-8 md:grid-cols-3">
  <Link
    to="/products"
    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
  >
    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
      <FaBoxOpen className="text-2xl" />
    </div>

    <h2 className="text-2xl font-bold text-slate-800">
      Products
    </h2>

    <p className="mt-3 text-slate-600">
      Explore savings accounts, shares and other financial products.
    </p>

    <div className="mt-6 flex items-center font-medium text-blue-600">
      Learn More
      <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </div>

    <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-blue-50 transition group-hover:scale-125" />
  </Link>

  <Link
    to="/forms"
    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
  >
    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
      <FaFileAlt className="text-2xl" />
    </div>

    <h2 className="text-2xl font-bold text-slate-800">
      Forms
    </h2>

    <p className="mt-3 text-slate-600">
      Complete and download official SACCO application forms.
    </p>

    <div className="mt-6 flex items-center font-medium text-blue-600">
      Open Forms
      <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </div>

    <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-blue-50 transition group-hover:scale-125" />
  </Link>

  <Link
    to="/feedback"
    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
  >
    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
      <FaCommentDots className="text-2xl" />
    </div>

    <h2 className="text-2xl font-bold text-slate-800">
      Feedback
    </h2>

    <p className="mt-3 text-slate-600">
      Report issues, ask questions or send suggestions to our team.
    </p>

    <div className="mt-6 flex items-center font-medium text-blue-600">
      Contact Us
      <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </div>

    <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-blue-50 transition group-hover:scale-125" />
  </Link>
</div>
      </div>
    </section>
  );
}

export default Home;
