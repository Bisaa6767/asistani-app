import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonies = [
  {
    quote:
      "Sejak menggunakan AgroAI, proses identifikasi penyakit menjadi jauh lebih cepat. Panen saya kini lebih sehat dan produktif.",
    name: "Bapak Darto",
    location: "Petani Cabai – Bantul, Yogyakarta",
    photo: "/homepage/testimoni/petani1.jpg",
  },
  {
    quote:
      "AgroAI memudahkan saya mendapatkan solusi hayati yang tepat. Sekarang saya lebih yakin sebelum mengambil keputusan.",
    name: "Ibu Warti",
    location: "Petani Sayur – Sukabumi, Jawa Barat",
    photo: "/homepage/testimoni/petani2.jpg",
  },
  {
    quote:
      "Teknologinya sederhana, cukup unggah foto, langsung keluar hasil. Sangat membantu petani kecil seperti saya.",
    name: "Pak Slamet",
    location: "Petani – Ngawi, Jawa Timur",
    photo: "/homepage/testimoni/petani3.jpg",
  },
];

function Testimoni() {
  return (
    <section id="testimoni" className="bg-[#F4F9F0] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#406343] mb-12"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          Testimoni Pengguna AgroAI
        </motion.h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {testimonies.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-sm border border-[#E1F3CF] hover:shadow-md transition duration-300 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.45, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <FaQuoteLeft className="text-[#5C8A1E] text-2xl mb-3" />
              <p className="text-[#406343] text-sm mb-6 leading-relaxed italic">
                “{item.quote}”
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={item.photo}
                  alt={item.name}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover border border-[#C7E9B0] hover:scale-105 transition-transform duration-300"
                />
                <div className="text-left">
                  <h4 className="text-[#406343] font-semibold text-sm">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#678D58]">{item.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimoni;
