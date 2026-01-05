import { Shield, Lock, Eye, AlertTriangle, CheckCircle, FileSearch } from 'lucide-react';

const securityServices = [
  {
    icon: Shield,
    title: 'Security Audits',
    description: 'Comprehensive evaluation of your security posture to identify vulnerabilities and risks.'
  },
  {
    icon: Lock,
    title: 'Data Protection',
    description: 'Advanced encryption and security measures to safeguard sensitive information.'
  },
  {
    icon: Eye,
    title: 'Threat Monitoring',
    description: '24/7 monitoring and detection of potential security threats and anomalies.'
  },
  {
    icon: AlertTriangle,
    title: 'Incident Response',
    description: 'Rapid response protocols to minimize damage and restore security after breaches.'
  },
  {
    icon: CheckCircle,
    title: 'Compliance Management',
    description: 'Ensure adherence to industry standards and regulatory requirements.'
  },
  {
    icon: FileSearch,
    title: 'Penetration Testing',
    description: 'Ethical hacking services to test and strengthen your security defenses.'
  }
];

export default function CyberSecurity() {
  return (
    <section id="cybersecurity" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cyber Security Excellence
            </h2>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              In today's digital landscape, protecting your business from cyber threats is paramount.
              Our expert team delivers comprehensive security solutions that safeguard your digital assets,
              ensure compliance, and provide peace of mind.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From vulnerability assessments to incident response, we provide end-to-end security services
              tailored to your organization's unique needs and risk profile.
            </p>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-600 to-orange-400 rounded-2xl p-8 shadow-2xl">
              <Shield className="text-white mb-4" size={64} />
              <h3 className="text-3xl font-bold text-white mb-4">Protected & Secure</h3>
              <p className="text-white text-lg leading-relaxed">
                Our security solutions combine cutting-edge technology with industry best practices
                to create a robust defense against evolving cyber threats.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:bg-orange-50 transition-colors border border-gray-200 hover:border-orange-600"
              >
                <Icon className="text-orange-600 mb-4" size={40} />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
