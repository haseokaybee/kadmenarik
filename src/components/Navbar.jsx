import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="font-primary text-2xl font-semibold">
          Kad <span className="text-pink-500">Menarik</span>
        </Link>

        {/* Desktop Menu */}
        <div className="space-x-6 text-gray-700 font-medium hidden md:block">
          <Link to="/">Home</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-gray-700"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? "max-h-60" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col bg-white border-t p-4 gap-4">
          <li className="mobile-link delay-0">
            <Link to="/">Home</Link>
          </li>
          <li className="mobile-link delay-1">
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className="mobile-link delay-2">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
