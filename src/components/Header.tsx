import { Menu, X, Shield } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-black shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="Saraphim Group" className="h-16 w-auto" />
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-white hover:text-orange-600 transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
            >
              Services
            </a>
            <a
              href="#cybersecurity"
              className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
            >
              Cyber Security
            </a>
            <a
              href="#engineering"
              className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
            >
              Software Engineering
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
            >
              Contact
            </a>
          </nav>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <a
              href="#home"
              className="block py-2 text-gray-700 hover:text-orange-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#services"
              className="block py-2 text-gray-700 hover:text-orange-600 transition-colors"
            >
              Services
            </a>
            <a
              href="#cybersecurity"
              className="block py-2 text-gray-700 hover:text-orange-600 transition-colors"
            >
              Cyber Security
            </a>
            <a
              href="#engineering"
              className="block py-2 text-gray-700 hover:text-orange-600 transition-colors"
            >
              Engineering
            </a>
            <a
              href="#contact"
              className="block py-2 text-gray-700 hover:text-orange-600 transition-colors"
            >
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
