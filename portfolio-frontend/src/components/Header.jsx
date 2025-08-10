// src/components/Header.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  // Hàm cuộn mượt tới section
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="w-full bg-black shadow-sm fixed top-0 left-0 z-20">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo bên trái */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
            setOpen(false);
          }}
          className="text-xl font-bold text-white cursor-pointer"
          style={{ textShadow: "2px 2px 8px rgba(139, 92, 246, 0.8)" }}
        >
          NB Dev
        </a>

        {/* Nav desktop */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href.slice(1));
                setOpen(false);
              }}
              className="text-gray-300 hover:text-purple-400 cursor-pointer transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Nút menu mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md hover:bg-purple-900 hover:text-white transition-colors duration-200"
            aria-label="Toggle Menu"
          >
            {open ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden bg-gray-900 border-t border-purple-700 shadow-sm">
          <nav className="flex flex-col p-4 gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href.slice(1));
                  setOpen(false);
                }}
                className="text-gray-300 hover:text-purple-400 cursor-pointer transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>

  );
}
