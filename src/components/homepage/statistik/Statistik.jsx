import React from "react";
import { FiAlertCircle, FiCheckCircle, FiUsers } from "react-icons/fi";
import { motion } from "framer-motion";

const stats = [
  {
    icon: <FiAlertCircle className="text-2xl text-red-600" />,
    value: "70%",
    label: "Petani Mengalami Kerugian",
    desc: "Akibat salah diagnosa & keterlambatan penanganan penyakit tanaman.",
  },
  {
    icon: <FiCheckCircle className="text-2xl text-green-600" />,
    value: "25+",
    label: "Penyakit Dapat Dideteksi AI",
    desc: "Mencakup jamur, virus, dan bakteri umum pada berbagai komoditas.",
  },
  {
    icon: <FiUsers className="text-2xl text-yellow-500" />,
    value: "1.500+",
    label: "Petani Telah Terbantu",
    desc: "Sudah menggunakan sistem AgroAI & agens hayati kami.",
  },
];

// Animasi terstruktur
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Statistik() {
  return (
    <section className="bg-[#F4F9F0] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#406343] mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Kenapa Deteksi Dini Itu Penting?
        </motion.h2>

        <motion.p
          className="text-[#406343] text-sm md:text-base max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Data di bawah ini menunjukkan betapa pentingnya diagnosa penyakit tanaman secara cepat dan akurat.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-3 gap-8 text-left"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              variants={card}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 border-l-4 border-[#5C8A1E] md:text-left text-center"
            >
              <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                <div className="p-3 bg-[#F0F5EB] rounded-full">{item.icon}</div>
                <div>
                  <h3 className="text-3xl font-extrabold text-[#406343] font-mono">{item.value}</h3>
                  <h4 className="text-md font-semibold text-[#406343]">{item.label}</h4>
                </div>
              </div>
              <p className="text-sm text-[#406343]">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Statistik;
