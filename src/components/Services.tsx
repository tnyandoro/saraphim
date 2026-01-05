import {
  Radar,
  AlertTriangle,
  Lock,
  RotateCw,
  Zap,
  Shield,
  Code,
  Briefcase,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Radar,
      title: "Attack Surface Management",
      description:
        "Discover and manage your external digital footprint with continuous vulnerability assessment and threat intelligence.",
      features: [
        "Asset Discovery",
        "Vulnerability Management",
        "Cloud Posture",
        "Risk Prioritization",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Managed Detection & Response",
      description:
        "Round-the-clock monitoring and threat detection with rapid response capabilities across your entire environment.",
      features: [
        "24/7 Monitoring",
        "Threat Detection",
        "EDR/SIEM",
        "Incident Response",
      ],
    },
    {
      icon: Lock,
      title: "Protective Controls",
      description:
        "Implement defense-in-depth with firewalls, DLP, PAM, and advanced endpoint protection.",
      features: [
        "Network Security",
        "Data Protection",
        "Access Control",
        "Threat Prevention",
      ],
    },
    {
      icon: Shield,
      title: "Penetration Testing",
      description:
        "Ethical hacking and security assessments to identify and remediate vulnerabilities before attackers exploit them.",
      features: [
        "Network Pen Testing",
        "Application Testing",
        "Social Engineering",
        "Remediation Plans",
      ],
    },
    {
      icon: Zap,
      title: "Incident Response",
      description:
        "Expert forensics, incident management, and rapid recovery to minimize breach impact and restore operations.",
      features: [
        "Incident Management",
        "Digital Forensics",
        "Recovery Plans",
        "Retainer Services",
      ],
    },
    {
      icon: RotateCw,
      title: "Training & Awareness",
      description:
        "Security awareness programs and tabletop exercises to prepare your teams for cyber incidents.",
      features: [
        "User Training",
        "Phishing Simulations",
        "Tabletop Exercises",
        "Security Awareness",
      ],
    },

    // ---------------------------------------
    // ✅ NEW SERVICE 1: Software & Mobile Apps
    // ---------------------------------------
    {
      icon: Code, // can change to "Smartphone", "Laptop", or "Code"
      title: "Software & Mobile Applications",
      description:
        "End-to-end development of secure, scalable software systems and mobile apps tailored to your business goals.",
      features: [
        "Custom Web Applications",
        "iOS & Android Apps",
        "API Development",
        "Cloud-Native Architecture",
      ],
    },

    // ---------------------------------------
    // ✅ NEW SERVICE 2: AI Integration
    // ---------------------------------------
    {
      icon: Radar, // can change to "Bot", "Brain", or "Cpu"
      title: "AI Integration & Automation",
      description:
        "Transform your operations with AI-powered automation, intelligent insights, and next-generation digital experiences.",
      features: [
        "AI Chatbots & Assistants",
        "Process Automation (RPA)",
        "Machine Learning Models",
        "Data Analytics & Predictions",
      ],
    },

    // ---------------------------------------
    // Optional from your previous request:
    // Bespoke IT Consulting
    // ---------------------------------------
    {
      icon: Briefcase,
      title: "Bespoke IT Consulting",
      description:
        "Tailored technology consulting that aligns digital strategy with operational excellence and security.",
      features: [
        "IT Strategy & Architecture",
        "Cloud & Infrastructure Advisory",
        "Digital Transformation",
        "Process Optimization",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="absolute inset-0 tech-pattern opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-seraphim-dark mb-6">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-seraphim-orange mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive cybersecurity services powered by modern Cyber
            security stack Stack framework
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-gray-200 hover:border-seraphim-orange shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-seraphim-orange to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-seraphim-dark mb-4 group-hover:text-seraphim-orange transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-500"
                    >
                      <div className="w-1.5 h-1.5 bg-seraphim-orange rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-1 bg-gradient-to-r from-seraphim-orange to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Ready to strengthen your security posture?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-seraphim-orange text-white rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
