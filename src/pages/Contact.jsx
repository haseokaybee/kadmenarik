import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
<div className="pt-28 px-4 max-w-6xl mx-auto text-center"></div>
      <div className="pt-28 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Hubungi Kami</h1>

        <p className="mt-2 text-gray-600">
          Tekan butang di bawah untuk WhatsApp kami terus.
        </p>

        <a
          href="https://wa.me/60123456789"
          className="mt-6 inline-block bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition"
        >
          WhatsApp Kami
        </a>
      </div>
    </>
  );
}
