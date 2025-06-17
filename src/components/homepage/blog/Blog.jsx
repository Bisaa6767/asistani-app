import React from "react";
import { Link } from "react-router-dom";
import useInViewObserver from "../../../hooks/useInViewObserver"; // sesuaikan path

const articles = [
  {
    title: "5 Ciri-Ciri Tanaman Terinfeksi Jamur Patogen",
    desc: "Pelajari bagaimana mengenali gejala awal infeksi jamur dan langkah-langkah pengendaliannya secara hayati.",
    link: "/artikel/ciri-infeksi-jamur",
    image: '/homepage/blog/pathogen.webp',
  },
  {
    title: "Panduan Penggunaan Agens Hayati untuk Petani Pemula",
    desc: "Langkah-langkah mudah menggunakan agens hayati seperti Trichoderma dan Pseudomonas untuk tanaman sehat.",
    link: "/artikel/panduan-agens-hayati",
    image: "/homepage/blog/biopest.webp",
  },
  {
    title: "Mengapa Deteksi Dini Penting dalam Pertanian Modern?",
    desc: "Deteksi sejak awal bisa menyelamatkan hasil panen Anda. Ini alasannya dan bagaimana memulainya.",
    link: "/artikel/deteksi-dini-pertanian",
    image: "/homepage/blog/detection.webp",
  },
];

function BlogCard({ article }) {
  const [ref, inView] = useInViewObserver();

  return (
    <div
      ref={ref}
      className={`bg-white rounded-xl shadow-md transition overflow-hidden group duration-500 ease-out transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-40 object-cover transform group-hover:scale-105 transition duration-500"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-[#406343] mb-2 group-hover:text-[#5C8A1E] transition">
          {article.title}
        </h3>
        <p className="text-sm text-[#678D58] mb-4">
          {article.desc}
        </p>
        <Link
          to={article.link}
          className="text-sm text-[#5C8A1E] font-medium hover:underline"
        >
          Baca Lebih Lanjut →
        </Link>
      </div>
    </div>
  );
}

function Blog() {
  return (
    <section id="blog-preview" className="bg-[#f6f6f6] py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#406343] mb-4">
          Artikel Edukasi Terbaru
        </h2>
        <p className="text-[#678D58] max-w-2xl mx-auto mb-12 text-sm md:text-base">
          Kami tidak hanya memberi solusi, tapi juga berbagi ilmu. Baca artikel-artikel kami untuk meningkatkan pemahaman Anda tentang pertanian sehat dan berkelanjutan.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {articles.map((article, idx) => (
            <BlogCard key={idx} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
