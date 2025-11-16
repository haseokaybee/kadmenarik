import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Gallery from "./pages/Gallery.jsx";
import DesignDetail from "./pages/DesignDetail.jsx";
import Contact from "./pages/Contact.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/design/:id" element={<DesignDetail />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);
