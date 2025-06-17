import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#2E3D27] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Deskripsi */}
        <div>
          <h2 className="text-2xl font-bold">
            <span className="text-white">Agro</span>
            <span className="text-[#A4C96E]">AI</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#C9D9BD]">
            Solusi pertanian berbasis AI & hayati yang akurat, cepat, dan ramah lingkungan.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Navigasi</h3>
          <ul className="space-y-2 text-sm text-[#C9D9BD]">
            <li><Link to="/" className="hover:text-[#A4C96E] transition">Beranda</Link></li>
            <li><Link to="/deteksi" className="hover:text-[#A4C96E] transition">Deteksi</Link></li>
            <li><Link to="/artikel" className="hover:text-[#A4C96E] transition">Artikel</Link></li>
            <li><Link to="/toko" className="hover:text-[#A4C96E] transition">Toko</Link></li>
            <li><Link to="/tentang" className="hover:text-[#A4C96E] transition">Tentang</Link></li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Kontak</h3>
          <p className="text-sm text-[#C9D9BD]">
            Email: info@agroai.id <br />
            WhatsApp: +62-812-3456-7890 <br />
            Kantor: Jl. Pertanian No. 12, Banyumas, Jawa Tengah
          </p>
        </div>

        {/* Sosial Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Ikuti Kami</h3>
          <div className="flex space-x-4 text-[#C9D9BD]">
            <a href="#" className="hover:text-[#A4C96E]"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#A4C96E]"><FaInstagram /></a>
            <a href="#" className="hover:text-[#A4C96E]"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-[#3E5140] text-center py-4 text-sm text-[#C9D9BD] bg-[#263322]">
        © {new Date().getFullYear()} AgroAI. Semua hak cipta dilindungi.
      </div>
    </footer>
  );
}

export default Footer;
