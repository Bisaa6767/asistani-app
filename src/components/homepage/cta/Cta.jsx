import React from "react";
import { Link } from "react-router-dom";

function Cta() {
  return (
    <section className="bg-[#F4F9F0] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#406343] mb-4">
          Solusi Modern dan Terpercaya untuk Melindungi Tanaman Anda
        </h2>
        <p className="text-[#678D58] mb-10 text-sm md:text-base max-w-2xl mx-auto">
          Deteksi penyakit secara akurat dengan teknologi AI dan kendalikan secara hayati dengan produk yang telah terbukti secara ilmiah. Aman, efektif, dan berkelanjutan untuk hasil panen optimal.
        </p>

        {/* Produk display */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10">
          {/* Pseudomonas - Highlighted */}
          <div className="relative bg-white p-4 rounded-xl shadow-xl w-60 border-2 border-[#5C8A1E] hover:shadow-2xl scale-105 transition-transform duration-300">
            <span className="absolute -top-3 left-3 bg-[#5C8A1E] text-white text-[10px] px-2 py-1 rounded-full shadow-md uppercase font-semibold tracking-wider">
              Paling Direkomendasikan
            </span>
            <img
              src="/homepage/cta/pf.webp"
              alt="Pseudomonas fluorescens"
              className="rounded-lg w-full h-36 object-cover mb-2"
            />
            <h4 className="text-sm font-semibold text-[#406343]">Pseudomonas fluorescens</h4>
            <p className="text-xs text-[#678D58] mb-1">Pengendali patogen tanah & stimulan akar.</p>
            <p className="text-[10px] text-gray-500 italic">Teruji laboratorium & aman untuk lingkungan</p>
          </div>

          {/* Beauveria */}
          <div className="bg-white p-4 rounded-xl shadow-md w-52 hover:shadow-lg transition">
            <img
              src="/homepage/cta/bb.webp"
              alt="Beauveria bassiana"
              className="rounded-lg w-full h-36 object-cover mb-2"
            />
            <h4 className="text-sm font-semibold text-[#406343]">Beauveria bassiana</h4>
            <p className="text-xs text-[#678D58] mb-1">Insektisida hayati untuk ulat & serangga.</p>
            <p className="text-[10px] text-gray-500 italic">Efektif, tidak meninggalkan residu</p>
          </div>

          {/* Trichoderma */}
          <div className="bg-white p-4 rounded-xl shadow-md w-52 hover:shadow-lg transition">
            <img
              src="/homepage/cta/t.webp"
              alt="Trichoderma sp."
              className="rounded-lg w-full h-36 object-cover mb-2"
            />
            <h4 className="text-sm font-semibold text-[#406343]">Trichoderma sp.</h4>
            <p className="text-xs text-[#678D58] mb-1">Fungisida hayati pelindung akar.</p>
            <p className="text-[10px] text-gray-500 italic">Diuji dan digunakan di berbagai demplot</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
          <Link
            to="/deteksi"
            className="bg-[#5C8A1E] text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-[#4a6e18] transition"
          >
            Coba Deteksi Sekarang
          </Link>
          <a
            href="/toko"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#5C8A1E] text-[#5C8A1E] px-6 py-3 rounded-xl text-sm font-medium hover:bg-[#E3F2D4] transition"
          >
            Lihat Produk Hayati Terverifikasi
          </a>
        </div>

        <p className="text-xs text-[#678D58] italic">
          Sudah waktunya beralih ke solusi pertanian yang lebih cerdas, aman, dan menguntungkan. 🌱
        </p>
      </div>
    </section>
  );
}

export default Cta;
