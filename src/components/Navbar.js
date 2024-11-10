import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#" },
    { name: "Download", href: "#" },
    { name: "Career", href: "#" },
    { name: "Pricing", href: "#" },
  ];

  return (
    <nav className="relative text-white shadow-lg bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-[10vh]">
          {/* Logo/Brand */}
          <div className="flex items-center flex-shrink-0 space-x-2">
            <div className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-lg">
              <span className="text-xl font-bold">P</span>
            </div>
            <span className="text-xl font-bold tracking-tight">Paradox</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden space-x-1 md:flex">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveItem(item.name)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-in-out
                                    ${
                                      activeItem === item.name
                                        ? "bg-blue-500 text-white"
                                        : "hover:bg-gray-700 hover:text-blue-400"
                                    }
                                    transform hover:scale-105`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 transition-colors duration-200 ease-in-out rounded-lg hover:bg-gray-700 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
                    ${
                      isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveItem(item.name)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
                                    ${
                                      activeItem === item.name
                                        ? "bg-blue-500 text-white"
                                        : "hover:bg-gray-700 hover:text-blue-400"
                                    }
                                    transform hover:translate-x-2`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
