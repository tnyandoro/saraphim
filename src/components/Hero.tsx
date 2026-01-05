import { useState, useEffect } from "react";
import {
  ArrowRight,
  Shield,
  Code,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Cybersecurity",
      description: "Advanced threat detection and response solutions",
      image:
        "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1920",
      icon: Shield,
    },
    {
      title: "IT Consultation",
      description: "Expert guidance for digital transformation",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920",
      icon: Heart,
    },
    {
      title: "Software Development",
      description: "Custom solutions tailored to your needs",
      image:
        "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1920",
      icon: Code,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative pt-20 min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-seraphim-dark/95 via-seraphim-dark/85 to-seraphim-dark/90"></div>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 tech-pattern opacity-20"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-seraphim-orange/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-seraphim-orange/20 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-seraphim-orange/20 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="flex justify-center gap-8 mb-8">
          {slides.map((slide, index) => {
            const Icon = slide.icon;
            return (
              <div
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`p-3 rounded-lg backdrop-blur-sm border cursor-pointer transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-seraphim-orange/30 border-seraphim-orange scale-110"
                    : "bg-seraphim-orange/10 border-seraphim-orange/20 hover:bg-seraphim-orange/20"
                }`}
              >
                <Icon className="w-8 h-8 text-seraphim-orange" />
              </div>
            );
          })}
        </div>

        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-seraphim-orange mb-3">
            {slides[currentSlide].title}
          </h2>
          <p className="text-xl text-gray-300">
            {slides[currentSlide].description}
          </p>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Enterprise Security,
          <br />
          <span className="text-gradient">Delivered with Precision</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Bespoke software Soutions. Comprehensive cybersecurity solutions
          protecting your organization at every stage.
        </p>

        <div className="flex justify-center gap-2 mb-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 bg-seraphim-orange"
                  : "w-2 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#contact"
            className="group px-8 py-4 bg-seraphim-orange text-white rounded-lg font-semibold text-lg hover:bg-orange-600 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-seraphim-orange/20 hover:shadow-seraphim-orange/40 hover:scale-105"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#performanta"
            className="px-8 py-4 bg-transparent text-white border-2 border-white/30 rounded-lg font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300"
          >
            Explore Our Stack
          </a>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-seraphim-orange/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-4xl font-bold text-seraphim-orange mb-2">
              15+
            </div>
            <div className="text-gray-300">Years of Excellence</div>
          </div>
          <div className="p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-seraphim-orange/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-4xl font-bold text-seraphim-orange mb-2">
              200+
            </div>
            <div className="text-gray-300">Projects Delivered</div>
          </div>
          <div className="p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-seraphim-orange/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-4xl font-bold text-seraphim-orange mb-2">
              98%
            </div>
            <div className="text-gray-300">Client Satisfaction</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
