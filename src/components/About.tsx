import { Target, Lightbulb, Users, TrendingUp } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Precision",
      description:
        "Meticulous attention to security details and measurable outcomes",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Cutting-edge security solutions leveraging advanced technologies",
    },
    {
      icon: Users,
      title: "Expertise",
      description:
        "Deep industry knowledge and certified security professionals",
    },
    {
      icon: TrendingUp,
      title: "Partnership",
      description: "Long-term relationships built on trust and proven results",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-seraphim-dark mb-6">
            Who We Are
          </h2>
          <div className="w-24 h-1 bg-seraphim-orange mx-auto mb-8"></div>

          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed space-y-6">
            <span>
              Saraphim is a leading enterprise cybersecurity and software
              development firm delivering end-to-end protection across modern
              digital ecosystems. We provide comprehensive security solutions
              that identify threats, detect attacks, protect infrastructure, and
              enable rapid recovery.
            </span>

            <span>
              Saraphim incorporates globally recognised security principles and
              standards essential for today’s businesses, including Zero-Trust
              Architecture, SOC 2 alignment, ISO 27001 best practices, NIST
              Cybersecurity Framework controls, data loss prevention (DLP),
              endpoint detection and response (EDR), SIEM/SOAR integration,
              encryption at rest and in transit, identity and access management
              (IAM), MFA, and full compliance with South African POPIA
              requirements.
            </span>

            <span>
              Beyond cybersecurity, Saraphim delivers robust applications,
              enterprise systems, and bespoke software development
              services—building secure, scalable, and high-performance solutions
              tailored to each client’s environment. From custom applications to
              complex enterprise platforms, every solution is engineered with
              security, resilience, and business continuity at its core.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-seraphim-orange hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-seraphim-orange to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-seraphim-dark mb-3">
                {value.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
