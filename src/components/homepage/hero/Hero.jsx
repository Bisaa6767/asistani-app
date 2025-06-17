import React from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiShoppingCart } from "react-icons/fi";

function Hero() {
  return (
    <section id="hero" className="md:min-h-[calc(100vh-72px)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center md:gap-6 py-8 lg:py-22 px-3">
        <div className="flex flex-col justify-center my-auto md:px-0">
          <div className="px-4 md:px-0 max-w-[42rem]">
            <h1 className="text-4xl font-bold text-[#406343]">
              Selamat datang di Agro<span className="text-[#679436]">AI</span>!
            </h1>
            <p className="mt-4 md:text-lg text-[#678D58] space-y-2">
              Sistem AI untuk deteksi hama dan penyakit tanaman serta
              rekomendasi pengendalian hayati.{" "}
              <span className="text-[#406343] font-semibold">
                AI untuk deteksi, hayati untuk solusi
              </span>{" "}
              demi masa depan pertanian yang berkelanjutan. Mulai deteksi
              sekarang dan dapatkan rekomendasi pengendalian hayati terdepan.
            </p>
          </div>

          <div className="block md:hidden w-[100vw]">
            <img
              src="/homepage/hero/hero.webp"
              className="object-cover"
              alt="Hero Image"
              loading="lazy"
            />
          </div>
          <div className="flex md:mt-8 gap-4 px-4 md:px-0">
            {/* Tombol Deteksi */}
            <Link
              to="/deteksi"
              className="flex items-center justify-center w-[12.5rem] h-[3rem] gap-2 bg-[#5C8A1E] text-white font-medium rounded-md hover:bg-[#466E1D] transition duration-200 shadow-sm"
            >
              <FiSearch className="text-lg" />
              Deteksi Sekarang
            </Link>

            {/* Tombol Toko */}
            <Link
              to="/toko"
              className="flex items-center justify-center w-[7.5rem] h-[3rem] gap-2 border border-[#5C8A1E] text-[#5C8A1E] font-medium rounded-md hover:bg-[#F4F9F0] transition duration-200 shadow-sm"
            >
              <FiShoppingCart className="text-lg" />
              Toko
            </Link>
          </div>
        </div>

        <div className="hidden md:block w-[100vw] md:max-w-[32rem]">
          <img
            src="/homepage/hero/hero.webp"
            className="object-cover"
            alt="Hero Image"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
