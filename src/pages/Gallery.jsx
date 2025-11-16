import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
import WhatsappFloat from "../components/Whatsappfloat.jsx";

const designs = [
  { id: 1, image: "/designs/kad1.jpeg", category: "Floral", name: "Floral Pink Charm" },
  { id: 2, image: "/designs/kad3.jpeg", category: "Minimalist", name: "Simple Elegant Cream" },
  { id: 3, image: "/designs/kad4.jpeg", category: "Gold", name: "Royal Gold Premium" },
  { id: 4, image: "/designs/kad8.jpeg", category: "Malay", name: "Songket Traditional" },
];

const categories = ["All", "Floral", "Minimalist", "Gold", "Malay"];

export default function Gallery() {
  const [params, setParams] = useSearchParams();
  const [search, setSearch] = useState("");

  const selected = params.get("category") || "All";

  const filtered = designs.filter((d) => {
    const matchCategory = selected === "All" || d.category === selected;
    const matchSearch = d.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <>
      <Navbar />

      <div className="pt-28 px-4 max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Koleksi Kad
        </h2>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Cari design…"
          className="w-full mb-5 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Category Buttons */}
        <div className="flex gap-3 overflow-x-auto pb-3 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setParams({ category: cat })}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm
              
              ${
                selected === cat
                  ? "bg-pink-600 text-white shadow"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-4
                        sm:grid-cols-3 sm:gap-5
                        md:grid-cols-4
                        lg:grid-cols-5">

          {filtered.map((item) => (
            <Link key={item.id} to={`/design/${item.id}`}>
              <img
                src={item.image}
                className="rounded-lg shadow gallery-card"
              />
            </Link>
          ))}

          {filtered.length === 0 && (
            <p className="text-gray-500 col-span-full text-center">
              Tiada design ditemui.
            </p>
          )}
        </div>
      </div>

      <Footer />
        <WhatsappFloat />
    </>
  );
}
