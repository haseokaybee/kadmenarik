import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const designs = [
  { id: 1, image: "/designs/card1.png" },
  { id: 2, image: "/designs/card2.png" },
  { id: 3, image: "/designs/card3.png" },
];

export default function DesignDetail() {
  const { id } = useParams();
  const card = designs.find((d) => d.id == id);

  if (!card) return <div className="pt-28">Rekod tidak dijumpai</div>;

  return (
    <>
      <Navbar />
      <div className="pt-28 px-4 max-w-6xl mx-auto text-center"></div>

      <div className="pt-28 px-4 text-center">

        <img
          src={card.image}
          className="w-full max-w-xs mx-auto rounded-lg shadow-xl"
        />

        <a
          href={`https://wa.me/60123456789?text=Hi%20saya%20nak%20tempah%20Design%20#${id}`}
          className="mt-6 inline-block bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition"
        >
          Tempah Melalui WhatsApp
        </a>

      </div>
    </>
  );
}
