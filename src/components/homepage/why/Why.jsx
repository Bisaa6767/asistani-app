import React from "react";
import {
  FiZap,
  FiShield,
  FiBox,
  FiGlobe,
  FiUsers,
  FiBarChart2,
} from "react-icons/fi";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FiZap className="text-2xl text-[#5C8A1E]" />,
    title: "Deteksi Akurat & Cepat",
    desc: "Didukung AI canggih, hasil analisis penyakit muncul dalam hitungan detik dengan tingkat akurasi tinggi.",
  },
  {
    icon: <FiShield className="text-2xl text-[#5C8A1E]" />,
    title: "Solusi Hayati Ramah Lingkungan",
    desc: "Kami mengutamakan rekomendasi pengendalian berbasis hayati demi pertanian yang sehat dan berkelanjutan.",
  },
  {
    icon: <FiBox className="text-2xl text-[#5C8A1E]" />,
    title: "Rekomendasi Terintegrasi",
    desc: "Setiap deteksi langsung dihubungkan dengan produk hayati yang relevan dan bisa langsung dibeli.",
  },
  {
    icon: <FiGlobe className="text-2xl text-[#5C8A1E]" />,
    title: "Akses Kapan Saja, di Mana Saja",
    desc: "Website kami dapat diakses dari HP, tablet, atau laptop — tanpa perlu instalasi.",
  },
  {
    icon: <FiUsers className="text-2xl text-[#5C8A1E]" />,
    title: "Dukungan untuk Petani Lokal",
    desc: "Kami berkomitmen memberdayakan petani Indonesia melalui teknologi dan ekosistem hayati.",
  },
  {
    icon: <FiBarChart2 className="text-2xl text-[#5C8A1E]" />,
    title: "Berbasis Data & Riset Terkini",
    desc: "Dikembangkan bersama tim riset pertanian, teknologi kami terus diperbarui berdasarkan temuan ilmiah terbaru.",
  },
];

function Why() {
  return (
    <section id="why-us" className="bg-[#F4F9F0] py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#406343] mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Fitur Utama Kami
        </motion.h2>

        <motion.p
          className="text-[#678D58] max-w-2xl mx-auto mb-12 text-sm md:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Inilah alasan kenapa platform kami berbeda dari cara lama dan lebih baik untuk petani Indonesia.
        </motion.p>

        {/* Batasi animasi di wrapper saja */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-[#F0F5EB] rounded-full">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg text-[#406343]">
                  {feature.title}
                </h3>
              </div>
              <p className="text-sm text-[#678D58]">{feature.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Why;
