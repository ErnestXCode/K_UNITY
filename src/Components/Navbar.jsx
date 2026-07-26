import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaBoxOpen,
  FaFileAlt,
  FaCommentDots,
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
      isActive
        ? "bg-blue-600 text-white shadow"
        : "text-slate-600 hover:bg-slate-100 hover:text-blue-600"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium transition ${
      isActive ? "bg-blue-600 text-white" : "text-slate-700 hover:bg-slate-100"
    }`;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/K_Unity_Logo.jpg"
              alt="K-Unity SACCO"
              className="h-11 w-11 rounded-full object-cover"
            />

            <div className="leading-tight">
              <h1 className="text-lg font-bold tracking-tight text-slate-800">
                K-Unity SACCO
              </h1>

              <p className="text-xs text-slate-500">Growing Together</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-3 md:flex">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>

            <NavLink to="/products" className={linkClass}>
              Products
            </NavLink>

            <NavLink to="/forms" className={linkClass}>
              Forms
            </NavLink>

            <NavLink to="/feedback" className={linkClass}>
              Feedback
            </NavLink>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-2xl transition hover:bg-slate-100 md:hidden"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b p-6">
          <div className="flex items-center gap-3">
            <img
              src="/K_Unity_Logo.jpg"
              alt="Logo"
              className="h-10 w-10 rounded-full object-cover"
            />

            <div>
              <h2 className="font-bold">K-Unity SACCO</h2>

              <p className="text-sm text-slate-500">Menu</p>
            </div>
          </div>

          <button
            onClick={() => setMenuOpen(false)}
            className="rounded-lg p-2 transition hover:bg-slate-100"
          >
            <FaTimes />
          </button>
        </div>

        <div className="flex flex-col gap-2 p-6">
          <NavLink
            to="/"
            className={mobileLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            <FaHome />
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={mobileLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            <FaBoxOpen />
            Products
          </NavLink>

          <NavLink
            to="/forms"
            className={mobileLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            <FaFileAlt />
            Forms
          </NavLink>

          <NavLink
            to="/feedback"
            className={mobileLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            <FaCommentDots />
            Feedback
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
