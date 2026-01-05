import { Shield, Radar, Lock, RotateCw } from 'lucide-react';

export default function PerformantaStack() {
  const stackItems = [
    {
      id: 'asm',
      title: 'Identify',
      subtitle: 'Attack Surface Management',
      color: 'from-purple-600 to-purple-700',
      description: 'Discover and manage your digital footprint with continuous monitoring of exposed assets and vulnerabilities.',
      services: [
        'Cloud Posture Management',
        'Cloud Infrastructure Entitlement Management',
        'Vulnerability Prioritisation / Management',
        'CAASM/EASM/CTEM',
        'Penetration Testing',
        'Threat Intelligence',
        'Digital Risk Posture/Brand Protection',
        'Security or Control Maturity Assessment',
        'Breach & Attack Simulation',
      ],
      icon: Radar,
    },
    {
      id: 'detect',
      title: 'Detect',
      subtitle: 'Detection & Response',
      color: 'from-orange-600 to-orange-700',
      description: 'Integrate multiple security layers to detect, respond to, and mitigate cyber threats across your entire ecosystem.',
      services: [
        'Managed Detection & Response (MDR)',
        'Security Operations Center (SOC / SIEM)',
        'Managed Email (Phishing)',
        'Identity Threat Detection & Response (ITDR)',
        'Network Detection & Response',
      ],
      icon: Radar,
    },
    {
      id: 'protect',
      title: 'Protect',
      subtitle: 'Defense & Prevention',
      color: 'from-black to-gray-900',
      description: 'Implement comprehensive security controls to protect your infrastructure, data, and applications.',
      services: [
        'Firewalls',
        'Endpoints',
        'Secure Web Gateway',
        'Data Loss Prevention (DLP)',
        'Cloud Access Security Broker (CASB)',
        'Privileged Access Management (PAM)',
        'Identity and Access Management (IAM)',
        'Web Application Firewalls (WAF)',
        'Workload Protection',
        'Email Security',
        'Vulnerability Scanning',
        'Managed SIEM',
      ],
      icon: Shield,
    },
    {
      id: 'recover',
      title: 'Prepare & Recover',
      subtitle: 'Resilience & Recovery',
      color: 'from-indigo-600 to-indigo-700',
      description: 'Prepare for incidents and recover quickly with comprehensive incident management and forensics services.',
      services: [
        'Incident Management',
        'Digital Forensics',
        'Recovery & Hardening',
        'Incident Response Retainers',
        'Tabletop Simulations',
        'Awareness Campaigns and Training',
      ],
      icon: RotateCw,
    },
  ];

  return (
    <section id="performanta" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-seraphim-dark mb-6">
            Performanta Stack
          </h2>
          <div className="w-24 h-1 bg-seraphim-orange mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A comprehensive, integrated platform for complete cybersecurity coverage. From identification through recovery,
            we protect your organization at every stage of the cyber lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {stackItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-seraphim-orange"
              >
                <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>

                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-3xl font-bold text-seraphim-dark mb-1">
                        {item.title}
                      </h3>
                      <p className="text-seraphim-orange font-semibold">{item.subtitle}</p>
                    </div>
                    <Icon className="w-8 h-8 text-seraphim-orange flex-shrink-0" />
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-2">
                    {item.services.map((service, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-seraphim-orange mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-seraphim-dark to-gray-900 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-3xl font-bold mb-4">Complete Coverage</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                The Performanta Stack provides an integrated approach to cybersecurity that covers every phase of the
                cyber lifecycle. From identifying attack surfaces to recovering from incidents, our comprehensive platform
                ensures your organization is protected at every stage.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Built on proven technologies and delivered by experienced security professionals, we transform complex
                security challenges into manageable, measured outcomes.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/20">
                <h4 className="font-bold text-seraphim-orange mb-2">Integrated Platform</h4>
                <p className="text-sm text-gray-300">Seamlessly connected services work together for maximum effectiveness.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/20">
                <h4 className="font-bold text-seraphim-orange mb-2">Proven Technologies</h4>
                <p className="text-sm text-gray-300">Leveraging industry-leading tools and platforms.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/20">
                <h4 className="font-bold text-seraphim-orange mb-2">Expert Teams</h4>
                <p className="text-sm text-gray-300">Delivered by experienced security professionals and engineers.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-seraphim-orange/5 rounded-2xl p-8 border border-seraphim-orange/20">
          <h3 className="text-2xl font-bold text-seraphim-dark mb-4">Client Needs and Expected Outcomes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-seraphim-dark mb-3">Service Delivery</h4>
              <p className="text-gray-700">Reliable, consistent delivery of security services tailored to your organization's needs.</p>
            </div>
            <div>
              <h4 className="font-bold text-seraphim-dark mb-3">Account Management</h4>
              <p className="text-gray-700">Dedicated support teams ensuring your security initiatives remain aligned with business goals.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
