import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/homepage/Home";
import Navbar from "./components/homepage/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="deteksi" element={<Home />} />
        <Route path="artikel" element={<Home />} />
        <Route path="toko" element={<Home />} />
        <Route path="kontak" element={<Home />} />
        <Route path="tentang" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
