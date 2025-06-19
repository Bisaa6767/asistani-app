import React, { useState, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import useInViewObserver from "../../../hooks/useInViewObserver"; // Sesuaikan path ini

// PASTIKAN SETIAP OBJEK TESTIMONI PUNYA ID UNIK DAN STABIL!
const testimonies = [
  {
    id: "testi-1", // Tambahkan ID unik
    quote:
      "Sejak menggunakan AgroAI, proses identifikasi penyakit menjadi jauh lebih cepat. Panen saya kini lebih sehat dan produktif.",
    name: "Bapak Darto",
    location: "Petani Cabai - Bantul, Yogyakarta",
    photo: "/homepage/testimoni/petani1.webp",
  },
  {
    id: "testi-2", // Tambahkan ID unik
    quote:
      "AgroAI memudahkan saya mendapatkan solusi hayati yang tepat. Sekarang saya lebih yakin sebelum mengambil keputusan.",
    name: "Ibu Warti",
    location: "Petani Sayur - Sukabumi, Jawa Barat",
    photo: "/homepage/testimoni/petani2.webp",
  },
  {
    id: "testi-3", // Tambahkan ID unik
    quote:
      "Teknologinya sederhana, cukup unggah foto, langsung keluar hasil. Sangat membantu petani kecil seperti saya.",
    name: "Pak Slamet",
    location: "Petani - Ngawi, Jawa Timur",
    photo: "/homepage/testimoni/petani3.webp",
  },
];

function TestimoniCard({ item }) {
  const [ref, inView] = useInViewObserver();
  const [showCard, setShowCard] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    // Ketika elemen masuk viewport DAN gambar sudah dimuat
    if (inView && isImageLoaded) {
      // Berikan penundaan singkat (misal 100ms) sebelum menampilkan kartu.
      // Ini memberi waktu browser untuk sepenuhnya merender gambar.
      const timer = setTimeout(() => {
        setShowCard(true);
      }, 100); // Sesuaikan durasi penundaan jika perlu (misal 50ms, 150ms)

      return () => clearTimeout(timer); // Cleanup timer saat komponen unmount atau inView/isImageLoaded berubah
    } else if (!inView && showCard) {
      // Opsional: Reset state jika elemen keluar dari viewport,
      // agar animasi bisa diputar ulang saat di-scroll kembali.
      setShowCard(false);
      setIsImageLoaded(false); // Reset status gambar juga
    }
  }, [inView, isImageLoaded, showCard]); // Tambahkan showCard ke dependency array

  return (
    <div
      ref={ref}
      // Kelas Tailwind untuk transisi opasitas dan efek slide-up
      // Menggunakan `will-change-transform` (sudah ada) untuk mengoptimalkan animasi
      className={`bg-white p-6 rounded-2xl shadow-sm border border-[#E1F3CF] hover:shadow-md transition duration-300 relative
        transform will-change-transform ${
          showCard ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
    >
      <FaQuoteLeft className="text-[#5C8A1E] text-2xl mb-3" />
      <p className="text-[#406343] text-sm mb-6 leading-relaxed italic">
        “{item.quote}”
      </p>
      <div className="flex items-center gap-4">
        {/* Gambar profil testimoni */}
        <img
          src={item.photo}
          alt={item.name}
          className="w-12 h-12 rounded-full object-cover border border-[#C7E9B0] hover:scale-105 transition-transform duration-300"
          onLoad={() => setIsImageLoaded(true)} // Set state saat gambar selesai dimuat
          loading="lazy" // Penting: Agar gambar yang di luar viewport awal tidak langsung dimuat
          // Pastikan dimensi gambar diketahui browser:
          // Karena `w-12 h-12` sudah fix, ini harusnya sudah membantu
          // Anda juga bisa menambahkan `width="48" height="48"` jika mau lebih eksplisit di HTML
        />
        <div className="text-left">
          <h4 className="text-[#406343] font-semibold text-sm">{item.name}</h4>
          <p className="text-xs text-[#678D58]">{item.location}</p>
        </div>
      </div>
    </div>
  );
}

function Testimoni() {
  return (
    <section id="testimoni" className="bg-[#f6f6f6] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#406343] mb-12">
          Testimoni Pengguna AgroAI
        </h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {testimonies.map((item) => ( // PENTING: Gunakan item.id sebagai key
            <TestimoniCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimoni;