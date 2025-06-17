import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import { navbar } from "../../../assets/aset";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`bg-[#f6f6f6] sticky top-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled ? "shadow-md py-2 opacity-92" : "py-4"
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl m-auto px-4 py-4 min-h-18">
        <div className="text-[#5C8A1E] font-extrabold text-3xl tracking-wide drop-shadow-sm">
          <span className="text-[#406343]">Agro</span>
          <span className="text-[#679436]">AI</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6">
          {navbar.map((nav, index) => (
            <Link
              key={index}
              to={nav.link}
              className="text-[#406343] hover:text-[#679436] font-medium text-base transition-colors duration-200"
            >
              {nav.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#679436] text-2xl"
        >
          {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#F9FBF3] px-4 pb-4 flex flex-col gap-2 border-t border-[#C7E9B0]">
          {navbar.map((nav, index) => (
            <Link
              key={index}
              to={nav.link}
              className="text-[#406343] py-2 font-semibold border-b border-[#E3F6C4]"
            >
              {nav.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
