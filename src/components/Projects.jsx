import React from "react";
import { ExternalLink } from "lucide-react"; // make sure you have lucide-react installed

const Projects = () => {
  let isDarkMode = false;

  const projects = [
    {
      title: "Batuk.gold Platform",
      status: "Live",
      description:
        "A gold and silver investment platform supporting buy/sell, SIP, coin redemption, and jewelry purchases.",
      features: [
        "Implemented purchases, recurring payments (SIP), and coin/jewelry redemption",
        "Integrated third-party APIs for live metal prices & catalogs",
        "Cashfree Webhooks for secure payments",
        "Firebase push notifications for real-time updates",
        "High-value transactions with secure logging & error handling",
      ],
      tech: ["Node.js", "Express.js", "MongoDB", "Firebase", "Socket.IO", "Cashfree"],
      link: "https://batuk.gold",
    },
    {
      title: "Partner.batuk.gold Platform",
      status: "Live",
      description:
        "Multi-role platform with a 4-level hierarchy (Partner → Employee → MFD → Investor) for investment and commission management.",
      features: [
        "Role-based dashboards with commission distribution",
        "Direct in-app payments & email-based EJS proposal links",
        "Integrated payment gateways with automated commission",
        "PDF report generation with js2pdf",
        "Role-specific access with Material-UI & Bootstrap UI",
      ],
      tech: [
        "React.js",
        "Axios",
        "Node.js",
        "Express.js",
        "MongoDB",
        "js2pdf",
        "Payment APIs",
      ],
      link: "https://partner.batuk.gold",
    },
    {
      title: "DreamDor.com Platform",
      status: "Live",
      description:
        "A counseling session booking platform with dashboards for Admin, Counselor, and Student users.",
      features: [
        "Role-Based Access Control (RBAC) dashboards",
        "Stripe payment gateway integration",
        "Admin-approved payouts after sessions",
        "Full session lifecycle: slot creation, booking, completion, payout",
      ],
      tech: ["React.js", "Node.js", "Express.js", "MySQL", "Stripe"],
      link: "https://dreamdor.com",
    },
    {
      title: "Government Services Platform",
      status: "In Progress",
      description:
        "A platform for citizens to access government services, with SMS alerts for new activities in their region.",
      features: [
        "District Collector can add officers & services",
        "Officers add citizens’ mobile numbers for SMS alerts",
        "Citizens notified of activities & services in their area",
      ],
      tech: ["React.js", "Bootstrap", "Node.js", "Express.js", "MongoDB Atlas"],
      link: "#",
    },
    {
      title: "E-commerce Website",
      status: "Completed",
      description:
        "A full-stack e-commerce app with product catalog, cart, orders, and category filtering.",
      features: [
        "Interactive React frontend",
        "Node.js & Express backend for APIs",
        "MongoDB for product & user data",
        "Shopping cart, product catalog, category filters",
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
      link: "#",
    },
    {
      title: "Netflix Clone",
      status: "Completed",
      description:
        "A clone of Netflix allowing user registration, login, and access to movies fetched via TMDB API.",
      features: [
        "User authentication (register/login)",
        "Movie catalog fetched from TMDB API",
        "Responsive design with Tailwind",
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className={`py-20 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                isDarkMode
                  ? "bg-gradient-to-br from-gray-700 to-gray-600"
                  : "bg-gradient-to-br from-gray-50 to-blue-50"
              }`}
            >
              {/* Title + Status */}
              <div className="flex justify-between items-start mb-4">
                <h3
                  className={`text-xl font-bold ${
                    isDarkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  {project.title}
                </h3>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    project.status === "Live"
                      ? isDarkMode
                        ? "bg-green-900 text-green-200"
                        : "bg-green-100 text-green-800"
                      : project.status === "In Progress"
                      ? isDarkMode
                        ? "bg-yellow-900 text-yellow-200"
                        : "bg-yellow-100 text-yellow-800"
                      : isDarkMode
                      ? "bg-gray-600 text-gray-300"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Description */}
              <p
                className={`mb-4 text-sm leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {project.description}
              </p>

              {/* Key Features */}
              <div className="mb-4">
                <h4
                  className={`font-semibold mb-2 ${
                    isDarkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  Key Features:
                </h4>
                <ul className="space-y-1">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className={`text-sm flex items-start gap-2 ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className={`text-xs px-2 py-1 rounded ${
                        isDarkMode
                          ? "bg-blue-900 text-blue-200"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        isDarkMode
                          ? "bg-gray-600 text-gray-300"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Link */}
              {project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 font-semibold transition-colors ${
                    isDarkMode
                      ? "text-blue-400 hover:text-blue-300"
                      : "text-blue-600 hover:text-blue-800"
                  }`}
                >
                  <ExternalLink size={16} />
                  View Live Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
