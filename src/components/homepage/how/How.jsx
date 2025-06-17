import React from "react";
import {
  FiUploadCloud,
  FiSearch,
  FiCheckCircle,
  FiShoppingCart,
} from "react-icons/fi";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function How() {
  const steps = [
    {
      title: "1. Unggah Foto",
      icon: <FiUploadCloud className="text-3xl text-[#5C8A1E]" />,
      desc: "Petani memotret tanaman yang sakit lalu mengunggahnya ke website kami.",
    },
    {
      title: "2. Deteksi AI",
      icon: <FiSearch className="text-3xl text-[#5C8A1E]" />,
      desc: "Sistem AI akan menganalisis foto dan mengidentifikasi jenis penyakit.",
    },
    {
      title: "3. Dapatkan Rekomendasi",
      icon: <FiCheckCircle className="text-3xl text-[#5C8A1E]" />,
      desc: "Website menampilkan nama penyakit serta rekomendasi pengendalian hayati.",
    },
    {
      title: "4. Belanja Solusi",
      icon: <FiShoppingCart className="text-3xl text-[#5C8A1E]" />,
      desc: "Petani bisa langsung membeli produk hayati yang sesuai dari toko kami.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="bg-[#F4F9F0] py-16 px-4 flex items-center justify-center"
    >
      <motion.div
        className="max-w-7xl mx-auto text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#406343] mb-6"
          variants={card}
        >
          Bagaimana Ini Bekerja?
        </motion.h2>
        <motion.p
          className="text-[#678D58] max-w-2xl mx-auto mb-12 text-sm md:text-base"
          variants={card}
        >
          Dengan empat langkah sederhana, Anda bisa mendeteksi penyakit tanaman
          dan mendapatkan solusi hayati terbaik.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          variants={container}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
              variants={card}
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="font-semibold text-[#406343] text-lg mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-[#678D58]">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-2 mt-10"
          variants={card}
        >
          <div className="w-8 h-[2px] bg-[#406343]" />
          <p className="text-sm italic text-[#406343] tracking-wide">
            “Pertanian Berkelanjutan. Solusi Hayati. Didukung oleh{" "}
            <span className="text-[#00A884] font-semibold">
              Kecerdasan Buatan
            </span>
            .”
          </p>
          <div className="w-8 h-[2px] bg-[#406343]" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default How;
