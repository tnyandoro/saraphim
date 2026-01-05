import { Shield, Radar, Lock, AlertTriangle } from "lucide-react";

export default function Goals() {
  const goals = [
    {
      icon: Radar,
      title: "Continuous Identification",
      description:
        "Discover and analyze your attack surface from an adversary perspective. Identify exposed assets, cloud misconfigurations, and vulnerabilities before attackers find them.",
    },
    {
      icon: AlertTriangle,
      title: "Rapid Detection",
      description:
        "Deploy integrated detection layers across your entire ecosystem. From endpoints to networks to identities, detect threats in real-time and respond instantly.",
    },
    {
      icon: Lock,
      title: "Comprehensive Protection",
      description:
        "Implement defense-in-depth strategies with layered security controls. Protect critical assets with firewalls, DLP, PAM, and advanced threat prevention.",
    },
    {
      icon: Shield,
      title: "Prepared Recovery",
      description:
        "Prepare for incidents and recover quickly. Incident response retainers, forensics capabilities, and hardening strategies ensure business continuity.",
    },
  ];

  return (
    <section
      id="goals"
      className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-seraphim-orange/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-seraphim-dark/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-seraphim-dark mb-6">
            Our Approach
          </h2>
          <div className="w-24 h-1 bg-seraphim-orange mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Built on modern Cyber security framework. Complete security
            lifecycle coverage from threat identification to recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-seraphim-orange shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-seraphim-orange to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <goal.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-seraphim-dark mb-4">
                    {goal.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {goal.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-10 bg-gradient-to-r from-seraphim-dark to-gray-800 rounded-3xl text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Enterprise Security at Every Stage
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Using the most modern cyber security stack ensures your organization
            is protected across the complete cyber lifecycle, with integrated
            solutions that work together seamlessly to deliver measurable
            security outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}
