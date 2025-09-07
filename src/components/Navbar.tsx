"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Team", path: "/team" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  return (
    <nav className="container mx-auto px-4 py-4 bg-black border-b border-yellow-400 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Logo with bright gold */}
        <Link href="/" aria-label="Go to home">
          <Image src="/logo.webp" alt="SNilRoy Associates" width={120} height={40} />
        </Link>

        {/* Desktop Navigation - Bright gold links */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                href={item.path}
                className={`relative group font-medium transition-colors duration-300 ${
                  pathname === item.path
                    ? "text-yellow-300 font-semibold"
                    : "text-yellow-400 hover:text-yellow-300"
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    pathname === item.path
                      ? "bg-yellow-300 w-full"
                      : "bg-yellow-300"
                  }`}
                ></span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button - Bright gold */}
        <button
          className="md:hidden text-yellow-400 focus:outline-none"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <FaTimes size={26} className="text-yellow-300" />
          ) : (
            <FaBars size={26} className="text-yellow-400" />
          )}
        </button>
      </div>

      {/* Mobile Navigation - Gold theme */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/70"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              className="relative ml-auto w-72 h-full bg-gray-900 shadow-lg border-l border-yellow-400 p-6 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <button
                className="absolute top-4 right-4 text-yellow-400 hover:text-yellow-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FaTimes size={24} />
              </button>

              <div className="mt-10 flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`block py-3 px-4 rounded-md transition-colors duration-300 text-lg ${
                      pathname === item.path
                        ? "text-yellow-300 bg-gray-800 font-medium"
                        : "text-yellow-400 hover:text-yellow-300 hover:bg-gray-800"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Bright gold CTA button */}
              <motion.button
                className="mt-auto bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-md font-bold transition-colors duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                    clipRule="evenodd"
                  />
                </svg>
                Book Consultation
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
