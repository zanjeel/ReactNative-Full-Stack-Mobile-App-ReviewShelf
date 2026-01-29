"use client"
import { useState } from "react";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`sticky top-0 ${
        isMenuOpen ? "backdrop-blur-lg" : "backdrop-blur-sm"
      } z-20 transition-all duration-300`}
    >
      {/* Announcement Bar */}
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p>Streamline your workflow and boost your productivity</p>
        <div className="inline-flex gap-1 items-center">
          <p className="text-white/60 hidden md:block">Get Started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>

      {/* Navbar */}
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Image src={Logo} alt="Saas Logo" height={40} width={40} />

            {/* Hamburger Menu Icon */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden focus:outline-none"
            >
              <MenuIcon className="h-8 w-8" />
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
                Get for free
              </button>
            </nav>
          </div>

          {/* Mobile Nav */}
          {isMenuOpen && (
            <nav className="justify-center items-center flex flex-col mt-4 gap-4 text-black/80 md:hidden">
              <a href="#" className="hover:text-black">About</a>
              <a href="#" className="hover:text-black">Features</a>
              <a href="#" className="hover:text-black">Customers</a>
              <a href="#" className="hover:text-black">Updates</a>
              <a href="#" className="hover:text-black">Help</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
                Get for free
              </button>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};
