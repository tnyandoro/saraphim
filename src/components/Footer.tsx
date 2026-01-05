import { Shield, Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-seraphim-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center space-x-3">
                <img
                  src="/logo.png"
                  alt="Saraphim Group"
                  className="h-12 w-auto"
                />
              </div>
              <span className="text-xl font-bold">Saraphim</span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Enterprise cybersecurity solutions. Your trusted partner in threat
              identification, detection, protection, and recovery.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Shield className="w-4 h-4 text-seraphim-orange" />
              <span>ISO 27001 Certified | SOC 2 Compliant</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-seraphim-orange transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#performanta"
                  className="text-gray-400 hover:text-seraphim-orange transition-colors"
                ></a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-seraphim-orange transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-seraphim-orange transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-seraphim-orange transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-seraphim-orange transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-seraphim-orange transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@seraphim.com"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-seraphim-orange transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>© {currentYear} Seraphim Group. All rights reserved.</div>
            <div className="flex gap-6">
              <a
                href="#"
                className="hover:text-seraphim-orange transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-seraphim-orange transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-seraphim-orange transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
