import { Linkedin, Mail } from "lucide-react";
import tendaiImg from "/src/assets/images/tendai.png";
import hasaniImg from "/src/assets/images/hasani.png";
import johnImg from "/src/assets/images/john.png";
import mitchelImg from "/src/assets/images/michell.jpeg";
import jonaImg from "/src/assets/images/jona.png";
import forbesImg from "/src/assets/images/forbes.jpeg";

export default function Team() {
  const teamMembers = [
    {
      name: "Tshikani Reckson Hasani",
      role: "Executive & Strategic Leader",
      expertise: "Digital Transformation & Governance",
      bio: "Visionary executive with over a decade of experience leading digital transformation, strategic initiatives, and operational excellence. Specialises in IT strategy, cybersecurity, and high-impact program management.",
      skills: [
        "Digital Transformation",
        "IT Strategy",
        "Cybersecurity",
        "Business Development",
        "Program Management",
        "Government Partnerships",
      ],
      image: hasaniImg,
    },
    {
      name: "Michele Latani Tshihomu",
      role: "Finance & Project Manager",
      expertise: "Financial Management & Operations",
      bio: "Results-driven professional with expertise in real estate, finance, and project management. Proven track record in delivering successful projects, managing budgets, and providing exceptional client service.",
      skills: [
        "Project Management",
        "Financial Management",
        "Budget Management",
        "Client Relations",
        "Real Estate",
        "Operational Excellence",
      ],
      image: mitchelImg,
    },
    {
      name: "Forbes Simba Karinda",
      role: "ICT & Cybersecurity Specialist",
      expertise: "Enterprise Security Architecture",
      bio: "Experienced ICT and Cybersecurity professional with over nine years leading technology operations, cloud infrastructure, and security transformation across government and private-sector organisations.",
      skills: [
        "Enterprise Security Architecture",
        "IT Operations",
        "Microsoft Azure",
        "Cloud Infrastructure",
        "Policy Development",
        "Disaster Recovery Planning",
      ],
      image:
        forbesImg,
      },
    {
      name: "John Fundai Mugwagwa",
      role: "IT Consultant & Web Developer",
      expertise: "Systems Design & Web Solutions",
      bio: "Experienced IT Consultant specialising in web development, systems design, and software solutions. Since 2018, developing and deploying websites and custom systems. IT Certified Professional (SA).",
      skills: [
        "ASP.NET Core",
        "C#",
        "Web Development",
        "Systems Design",
        "HTML/CSS/JavaScript",
        "Custom Applications",
      ],
      image: johnImg,
    },
    {
      name: "Tendai Nyandoro",
      role: "Full-Stack Engineer",
      expertise: "Secure Web Applications & DevOps",
      bio: "Experienced Full-Stack Engineer with 8+ years building secure, scalable web applications. Specialises in API development, authentication systems, and DevOps infrastructure across multi-cloud environments.",
      skills: [
        "React.js",
        "Next.js",
        "Node.js",
        "API Development",
        "Docker",
        "AWS/Azure/Oracle",
        "Web Security",
        "MongoDB",
      ],
      image: tendaiImg,
    },
    {
      name: "Jonathan",
      role: "Hardware and Security Engineer",
      expertise: "Cyber Security and Hardware Specialist",
      bio: "Results-driven engineer with comprehensive expertise in cybersecurity architecture and hardware infrastructure. Proven track record designing secure networks, conducting security assessments, and implementing compliance frameworks (ISO 27001, NIST). Skilled in protecting enterprise systems from evolving cyber threats while maintaining optimal performance.",
      skills: [
        "Cybersecurity Architecture",
        "Hardware Infrastructure",
        "Security Compliance ",
        "Risk Management",
        "Endpoint Security",
        "Technical Documentation",
      ],
      image: jonaImg,
    },
  ];

  return (
    <section id="team" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-seraphim-dark mb-6">
            Our Team
          </h2>
          <div className="w-24 h-1 bg-seraphim-orange mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A diverse team of experts bringing together decades of combined
            experience in cybersecurity, technology, and business
            transformation.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => {
            const isZoomOut =
              member.name === "Tendai Nyandoro" ||
              member.name === "John Fundai Mugwagwa";

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-seraphim-orange"
              >
                {/* IMAGE SECTION */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-seraphim-dark to-gray-800">
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full transition-transform duration-300 
                      ${
                        isZoomOut
                          ? "object-contain scale-90 group-hover:scale-100"
                          : "object-cover group-hover:scale-110"
                      }
                    `}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-seraphim-dark mb-1 group-hover:text-seraphim-orange transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-seraphim-orange font-semibold text-sm mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-700 font-medium text-sm mb-3">
                    {member.expertise}
                  </p>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Skills */}
                  <div className="mb-4">
                    <div className="text-xs font-semibold text-seraphim-dark mb-2 uppercase tracking-wide">
                      Key Skills
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.slice(0, 4).map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs bg-seraphim-orange/10 text-seraphim-dark rounded-full border border-seraphim-orange/20 hover:bg-seraphim-orange/20 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-gray-200">
                    <a
                      href="#"
                      className="flex-1 py-2 px-3 bg-seraphim-orange/10 hover:bg-seraphim-orange/20 text-seraphim-orange rounded-lg transition-colors flex items-center justify-center gap-2 text-sm font-medium"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span className="hidden sm:inline">LinkedIn</span>
                    </a>
                    <a
                      href="#"
                      className="flex-1 py-2 px-3 bg-seraphim-orange/10 hover:bg-seraphim-orange/20 text-seraphim-orange rounded-lg transition-colors flex items-center justify-center gap-2 text-sm font-medium"
                    >
                      <Mail className="w-4 h-4" />
                      <span className="hidden sm:inline">Email</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-seraphim-dark to-gray-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Work with Our Expert Team?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Our diverse team brings together decades of experience in
            cybersecurity, technology strategy, and digital transformation.
            Let's discuss how we can help secure your organization.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-seraphim-orange text-white rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
