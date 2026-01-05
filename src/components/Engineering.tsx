import { Cog, Zap, Cloud } from "lucide-react";

const engineeringDisciplines = [
  {
    icon: Zap,
    title: "Bespoke Software",
    services: [
      "Custom Software Development",
      "Web & Mobile App Development",
      "Enterprise Application Design",
      "System Integration Solutions",
      "Process Automation Software",
      "Application Support & Maintenance",
    ],
    color: "from-orange-600 to-orange-500",
  },
  {
    icon: Cog,
    title: "IT Consultancy Services",
    services: [
      "IT Strategy & Advisory",
      "Digital Transformation Consulting",
      "Cloud Architecture & Migration",
      "Cybersecurity Consulting",
      "Infrastructure Planning",
      "Technical Project Management",
      "Business Process Optimization",
      "Technical Project Management",
      "Digital Transformation",
      "Systems Architecture",
    ],
    color: "from-orange-600 to-orange-500",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    services: [
      "Cloud Architecture & Design",
      "Cloud Migration",
      "Cloud Infrastructure Management",
      "DevOps & CI/CD Automation",
      "Backup & Disaster Recovery",
      "Cloud Cost Optimization",
    ],
    color: "from-orange-600 to-orange-500",
  },
];

export default function Engineering() {
  return (
    <section
      id="engineering"
      className="py-20 bg-gray-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Software Engineering Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive software engineering solutions across all industries
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {engineeringDisciplines.map((discipline, index) => {
            const Icon = discipline.icon;
            return (
              <div
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:transform hover:scale-105 transition-all"
              >
                <div className={`bg-gradient-to-r ${discipline.color} p-6`}>
                  <Icon className="text-white mb-4" size={48} />
                  <h3 className="text-2xl font-bold text-white">
                    {discipline.title}
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {discipline.services.map((service, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span className="text-gray-300">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
