import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#team", label: "Team" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-zinc-900 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center h-24">
          {/* Logo Area */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-auto h-auto rounded-lg flex items-center justify-center transition-colors py-2">
              <img
                src="/logo.png"
                alt="Saraphim Group"
                className="h-auto w-auto md:h-24 object-contain"
              />
            </div>

            <span
              className={`text-2xl font-bold transition-colors ${
                isScrolled ? "text-seraphim-dark" : "text-white"
              }`}
            ></span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-semibold transition-colors ${
                  isScrolled
                    ? "text-seraphim-light hover:text-seraphim-orange"
                    : "text-white hover:text-seraphim-orange"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                isScrolled
                  ? "bg-seraphim-orange text-white hover:bg-orange-600"
                  : "bg-seraphim-orange text-white hover:bg-orange-600"
              }`}
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-seraphim-dark" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-seraphim-dark hover:text-seraphim-orange font-semibold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-6 py-2 bg-seraphim-orange text-white text-center rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
