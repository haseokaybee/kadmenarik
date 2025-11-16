import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import WhatsappFloat from "../components/Whatsappfloat.jsx";
import { useEffect, useRef, useState } from "react";


export default function Home() {

  const galleryRef = useRef(null);

  // ============================
  // FADE-IN EFFECT ON SCROLL
  // ============================
  useEffect(() => {
    const items = document.querySelectorAll(".fade-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

 // INFINITE AUTO SCROLL (FINAL FIXED VERSION)
useEffect(() => {
  const container = galleryRef.current;
  if (!container) return;

  let speed = 1.2; // perfect
  let animationId;

  const scrollLoop = () => {
    container.scrollLeft += speed;

    if (container.scrollLeft >= container.scrollWidth / 2) {
      container.scrollLeft = 0;
    }

    animationId = requestAnimationFrame(scrollLoop);
  };

  animationId = requestAnimationFrame(scrollLoop);

  return () => cancelAnimationFrame(animationId);
}, []);

  // (Typewriter code continues below this)




 // ----------------------------
// Smooth Typewriter Effect (NO LAG)
// ----------------------------
const typeRef = useRef(null);
const animRef = useRef(null); // store animation loop

const text = "Selamat Datang ke Kad Menarik";

const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const element = typeRef.current;
  let i = 0;
  let deleting = false;
  let lastTime = 0;

  const typingSpeed = 60;   // smooth
  const deletingSpeed = 40; // faster delete
  const pauseTime = 900;    // pause at full text

  const step = (timestamp) => {
    if (!lastTime) lastTime = timestamp;
    const elapsed = timestamp - lastTime;

    if (!isVisible) return; // stop animation when offscreen

    if (elapsed > (deleting ? deletingSpeed : typingSpeed)) {
      if (!deleting) {
        // typing
        element.textContent = text.slice(0, i + 1);
        i++;

        if (i === text.length) {
          deleting = true;
          lastTime = timestamp + pauseTime;
        }
      } else {
        // deleting
        element.textContent = text.slice(0, i - 1);
        i--;

        if (i === 0) {
          deleting = false;
        }
      }

      lastTime = timestamp;
    }

    animRef.current = requestAnimationFrame(step);
  };

  if (isVisible) {
    cancelAnimationFrame(animRef.current);
    animRef.current = requestAnimationFrame(step);
  }

  return () => cancelAnimationFrame(animRef.current);
}, [isVisible]);


// ----------------------------
// Detect when Section 1 is visible
// ----------------------------
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      setIsVisible(entries[0].isIntersecting);
    },
    { threshold: 0.7 }
  );

  if (typeRef.current) observer.observe(typeRef.current);

  return () => observer.disconnect();
}, []);


  return (
    <>
      <Navbar />

      {/* ===========================
          SECTION 1 — HERO / WHO WE ARE
      ============================== */}
      <section className="pt-32 px-4 max-w-5xl mx-auto text-center fade-section">

        {/* TYPEWRITER TEXT */}
        <h1
          ref={typeRef}
          className="type-cursor text-4xl sm:text-5xl font-semibold mb-4"
          style={{ fontFamily: "var(--font-primary)" }}
        ></h1>

        <p
          className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto"
          style={{ fontFamily: "var(--font-secondary)" }}
        >
          Kami menyediakan kad kahwin digital moden, minimalis dan elegan
          untuk pasangan yang inginkan sesuatu yang unik, eksklusif dan mudah dikongsi.
        </p>
      </section>

      {/* ===========================
    SECTION 2 — INFINITE AUTO SCROLL GALLERY
============================== */}
<section className="mt-20 fade-section px-4">
  <h2
    className="text-center text-3xl font-semibold mb-8"
    style={{ fontFamily: "var(--font-primary)" }}
  >
    Hasil Kerja Kami
  </h2>

  <div
    ref={galleryRef}
    className="gallery-wrapper overflow-x-auto no-scrollbar scroll-smooth"
  >
<div className="gallery-track inline-flex gap-6 py-6 px-2">


      {/* ORIGINAL SET */}
      {[
        "/designs/kad1.jpeg",
        "/designs/kad2.jpeg",
        "/designs/kad3.jpeg",
        "/designs/kad4.jpeg",
        "/designs/kad5.jpeg",
        "/designs/kad6.jpeg",
        "/designs/kad7.jpeg",
        "/designs/kad8.jpeg",
      ].map((img, index) => (
        <img
          key={index}
          src={img}
          className="w-64 h-96 object-cover rounded-xl shadow-lg hover:scale-105 transition"
        />
      ))}

      {/* DUPLICATE SET */}
      {[
        "/designs/kad1.jpeg",
        "/designs/kad2.jpeg",
        "/designs/kad3.jpeg",
        "/designs/kad4.jpeg",
        "/designs/kad5.jpeg",
        "/designs/kad6.jpeg",
        "/designs/kad7.jpeg",
        "/designs/kad8.jpeg",
      ].map((img, index) => (
        <img
          key={"dup-" + index}
          src={img}
          className="w-64 h-96 object-cover rounded-xl shadow-lg hover:scale-105 transition"
        />
      ))}
    </div>
  </div>
</section>


      {/* ===========================
          SECTION 3 — CLIENT REVIEWS
      ============================== */}
      <section className="mt-20 fade-section px-4 max-w-5xl mx-auto">
        <h2
          className="text-center text-3xl font-semibold mb-8"
          style={{ fontFamily: "var(--font-primary)" }}
        >
          Apa Kata Pelanggan
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Ain & Farhan",
              text: "Design sangat cantik! Ramai puji kad digital kami.",
            },
            {
              name: "Nisa & Khairul",
              text: "Senang berurusan, hasil kerja cepat & premium.",
            },
            {
              name: "Bella & Izham",
              text: "Sangat puas hati! Servis terbaik dan harga berbaloi.",
            },
          ].map((review, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-md border border-gray-200"
            >
              <p className="text-gray-700 italic mb-3">
                “{review.text}”
              </p>
              <h4
                className="text-pink-600 font-semibold"
                style={{ fontFamily: "var(--font-secondary)" }}
              >
                — {review.name}
              </h4>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <WhatsappFloat/>
    </>
  );
}
