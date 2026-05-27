
import React from "react";
import { ExternalLink, Github, } from "lucide-react";
import { motion } from "framer-motion";

const Projects = ({ isDarkMode }) => {
  const projects = [
    {
      title: "Mechmiles.com Platform",
      status: "Live",
      description:
        "E-commerce platform for tyres & automotive services with storefront, service booking, mobile apps, POS, and Admin dashboard.",
      impact: "Serving 5000+ customers across 10+ service locations",
      features: ["Search tyres by vehicle/size/brand", "Cart, checkout & online payments", "Schedule tyre service appointments", "Admin: inventory, orders, service locations & franchises", "Mobile apps and POS support"],
      tech: ["React.js", "Python", "Flask", "PostgreSQL", "Razorpay"],
      link: "https://mechmiles.com",
      thumbnail: "/assets/projects/mechmiles.png",
      isPriority: true,
    },
    {
      title: "Batuk.gold Platform",
      status: "Live",
      description:
        "Gold and silver investment platform supporting buy/sell, SIP, coin redemption, and jewelry purchases.",
      impact: "Processing high-value transactions with secure payment integration",
      features: [
        "Implemented purchases, recurring payments (SIP), and coin/jewelry redemption",
        "Integrated third-party APIs for live metal prices & catalogs",
        "Cashfree Webhooks for secure payments",
        "Firebase push notifications for real-time updates",
        "High-value transactions with secure logging & error handling",
      ],
      tech: ["Node.js", "Express.js", "MongoDB", "Firebase", "Socket.IO", "Cashfree"],
      link: "https://batuk.gold",
      thumbnail: "/assets/projects/batuk.png",
    },
    {
      title: "Bajaj Capital Platform",
      status: "Live",
      description:
        "White-label gold and silver investment platform for Bajaj Capital as a Batuk partner, featuring buy/sell, SIP, coin redemption, and jewelry purchases with Bajaj branding.",
      impact: "Enterprise partnership platform processing high-value transactions with secure payment integration",
      features: [
        "White-label implementation of Batuk's investment platform for Bajaj Capital",
        "Purchases, recurring payments (SIP), and coin/jewelry redemption",
        "Live metal prices & catalogs via third-party API integration",
        "Cashfree Webhooks for secure payments and transaction handling",
        "Enterprise-grade logging, error handling, and audit trails",
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Cashfree", "Firebase"],
      link: "https://digigoldsilver.bajajcapital.com/",
      thumbnail: "/assets/projects/bajajcapital.png",
    },
    {
      title: "Partner.batuk.gold Platform",
      status: "Live",
      description:
        "Multi-role platform with 4-level hierarchy for investment and commission management.",
      impact: "Managing partner commissions and automated payouts",
      features: [
        "Role-based dashboards with commission distribution",
        "Direct in-app payments & email-based EJS proposal links",
        "Integrated payment gateways with automated commission",
        "PDF report generation with js2pdf",
        "Role-specific access with Material-UI & Bootstrap UI",
      ],
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "js2pdf",
        "Payment APIs",
      ],
      link: "https://partner.batuk.gold",
      thumbnail: "/assets/projects/partner.png",
    },
    {
      title: "DreamDor.com Platform",
      status: "Live",
      description:
        "Counseling session booking platform with dashboards for Admin, Counselor, and Student users.",
      impact: "Facilitating 100+ counseling sessions with Stripe integration",
      features: [
        "Role-Based Access Control (RBAC) dashboards",
        "Stripe payment gateway integration",
        "Admin-approved payouts after sessions",
        "Full session lifecycle: slot creation, booking, completion, payout",
      ],
      tech: ["React.js", "Node.js", "Express.js", "MySQL", "Stripe"],
      link: "https://dreamdor.com",
      thumbnail: "/assets/projects/dreamdor.png",
    },
    {
      title: "Government Services Platform",
      status: "Completed",
      description:
        "Platform for citizens to access government services with SMS alerts for new regional activities.",
      impact: "SMS notification system for regional updates",
      features: [
        "District Collector can add officers & services",
        "Officers add citizens’ mobile numbers for SMS alerts",
        "Citizens notified of activities & services in their area",
      ],
      tech: ["React.js", "Bootstrap", "Node.js", "Express.js", "MongoDB Atlas"],
      link: "https://github.com/Nagendra1311/Government-Services",
      thumbnail: "/assets/projects/government.png",
      flag: 'git'

    },
    {
      title: "E-commerce Website",
      status: "Completed",
      description:
        "Full-stack e-commerce application with product catalog, cart, and order management.",
      impact: "Complete MERN stack implementation with 50+ products",
      features: [
        "Interactive React frontend with responsive design",
        "Node.js & Express backend APIs",
        "MongoDB for product & user data storage",
        "Shopping cart, product catalog, category filters",
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
      link: "https://github.com/Nagendra1311/E-commerce",
      thumbnail: "/assets/projects/ecommerce.png",
      flag: 'git'
    },
    {
      title: "Netflix Clone",
      status: "Completed",
      description:
        "Netflix clone with user authentication and movie catalog from TMDB API.",
      impact: "Full authentication & movie streaming from TMDB API",
      features: [
        "User authentication (register/login)",
        "Movie catalog fetched from TMDB API",
        "Responsive design with Tailwind CSS",
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
      link: "https://github.com/Nagendra1311/Netflix-Clone",
      thumbnail: "/assets/projects/netflix.png",
      flag: 'git'

    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="projects"
      className={`py-20 transition-colors duration-300 ${isDarkMode ? "bg-gray-800" : "bg-white"
        }`}
    >
      <div className="max-w-6xl px-4 mx-auto">
        <h2 className="mb-16 text-4xl font-bold text-center text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
          Featured Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className={`p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${isDarkMode
                  ? "bg-gradient-to-br from-gray-700 to-gray-600"
                  : "bg-gradient-to-br from-gray-50 to-blue-50"
                }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              variants={cardVariants}
            >
              {/* Title + Status */}
              <div className="flex items-start justify-between mb-4">
                <h3
                  className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"
                    }`}
                >
                  {project.title}
                </h3>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${project.status === "Live"
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

              {/* Optional thumbnail / decorative placeholder */}
              {project.thumbnail ? (
                <div className="mb-4">
                  <img
                    src={project.thumbnail}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                    className="object-cover w-full h-40 mb-4 rounded-sm"
                  />
                </div>
              ) : null}

              {/* Description */}
              <p
                className={`mb-4 text-sm leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
              >
                {project.description}
              </p>

              {/* Impact Metric */}
              {project.impact && (
                <p
                  className={`mb-4 text-sm font-semibold italic ${isDarkMode ? "text-blue-300" : "text-blue-600"
                    }`}
                >
                  💡 {project.impact}
                </p>
              )}

              {/* Key Features */}
              <div className="mb-4">
                <h4
                  className={`font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-800"
                    }`}
                >
                  Key Features:
                </h4>
                <ul className="space-y-1">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className={`text-sm flex items-start gap-2 ${isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                    >
                      <div className="flex-shrink-0 w-1 h-1 mt-2 bg-blue-600 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mb-4">
                <ul className="flex flex-wrap gap-2 p-0 m-0 list-none" aria-label={`${project.title} technologies`}> 
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <li key={i}>
                      <span
                        className={`text-xs px-2 py-1 rounded ${isDarkMode
                          ? "bg-blue-900 text-blue-200"
                          : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {tech}
                      </span>
                    </li>
                  ))}
                  {project.tech.length > 3 && (
                    <li>
                      <span
                        className={`text-xs px-2 py-1 rounded ${isDarkMode
                          ? "bg-gray-600 text-gray-300"
                          : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        +{project.tech.length - 3} more
                      </span>
                    </li>
                  )}
                </ul>
              </div>

              {/* Links */}
              <div className="flex gap-3 mt-6">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} ${project.flag === "git" ? "GitHub repository" : "live project"}`}
                    className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 ${project?.flag
                      ? isDarkMode
                        ? "bg-gray-600 text-white hover:bg-gray-500 focus:ring-gray-400"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400"
                      : isDarkMode
                        ? "bg-blue-600 text-white hover:bg-blue-500 focus:ring-blue-400"
                        : "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400"
                    }`}
                  >
                    {project?.flag ? <Github size={18} /> : <ExternalLink size={18} />}
                    {project?.flag ? "GitHub" : "Live Demo"}
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

















// import React from "react";
// import { ExternalLink } from "lucide-react"; // make sure you have lucide-react installed

// const Projects = ({isDarkMode}) => {

//   const projects = [
//     {
//       title: "Batuk.gold Platform",
//       status: "Live",
//       description:
//         "A gold and silver investment platform supporting buy/sell, SIP, coin redemption, and jewelry purchases.",
//       features: [
//         "Implemented purchases, recurring payments (SIP), and coin/jewelry redemption",
//         "Integrated third-party APIs for live metal prices & catalogs",
//         "Cashfree Webhooks for secure payments",
//         "Firebase push notifications for real-time updates",
//         "High-value transactions with secure logging & error handling",
//       ],
//       tech: ["Node.js", "Express.js", "MongoDB", "Firebase", "Socket.IO", "Cashfree"],
//       link: "https://batuk.gold",
//     },
//     {
//       title: "Partner.batuk.gold Platform",
//       status: "Live",
//       description:
//         "Multi-role platform with a 4-level hierarchy (Partner → Employee → MFD → Investor) for investment and commission management.",
//       features: [
//         "Role-based dashboards with commission distribution",
//         "Direct in-app payments & email-based EJS proposal links",
//         "Integrated payment gateways with automated commission",
//         "PDF report generation with js2pdf",
//         "Role-specific access with Material-UI & Bootstrap UI",
//       ],
//       tech: [
//         "React.js",
//         "Axios",
//         "Node.js",
//         "Express.js",
//         "MongoDB",
//         "js2pdf",
//         "Payment APIs",
//       ],
//       link: "https://partner.batuk.gold",
//     },
//     {
//       title: "DreamDor.com Platform",
//       status: "Live",
//       description:
//         "A counseling session booking platform with dashboards for Admin, Counselor, and Student users.",
//       features: [
//         "Role-Based Access Control (RBAC) dashboards",
//         "Stripe payment gateway integration",
//         "Admin-approved payouts after sessions",
//         "Full session lifecycle: slot creation, booking, completion, payout",
//       ],
//       tech: ["React.js", "Node.js", "Express.js", "MySQL", "Stripe"],
//       link: "https://dreamdor.com",
//     },
//     {
//       title: "Government Services Platform",
//       status: "In Progress",
//       description:
//         "A platform for citizens to access government services, with SMS alerts for new activities in their region.",
//       features: [
//         "District Collector can add officers & services",
//         "Officers add citizens’ mobile numbers for SMS alerts",
//         "Citizens notified of activities & services in their area",
//       ],
//       tech: ["React.js", "Bootstrap", "Node.js", "Express.js", "MongoDB Atlas"],
//       link: "#",
//     },
//     {
//       title: "E-commerce Website",
//       status: "Completed",
//       description:
//         "A full-stack e-commerce app with product catalog, cart, orders, and category filtering.",
//       features: [
//         "Interactive React frontend",
//         "Node.js & Express backend for APIs",
//         "MongoDB for product & user data",
//         "Shopping cart, product catalog, category filters",
//       ],
//       tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
//       link: "#",
//     },
//     {
//       title: "Netflix Clone",
//       status: "Completed",
//       description:
//         "A clone of Netflix allowing user registration, login, and access to movies fetched via TMDB API.",
//       features: [
//         "User authentication (register/login)",
//         "Movie catalog fetched from TMDB API",
//         "Responsive design with Tailwind",
//       ],
//       tech: ["React.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
//       link: "#",
//     },
//   ];

//   return (
//     <section
//       id="projects"
//       className={`py-20 transition-colors duration-300 ${
//         isDarkMode ? "bg-gray-800" : "bg-white"
//       }`}
//     >
//       <div className="max-w-6xl px-4 mx-auto">
//         <h2 className="mb-16 text-4xl font-bold text-center text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
//           Featured Projects
//         </h2>

//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className={`p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
//                 isDarkMode
//                   ? "bg-gradient-to-br from-gray-700 to-gray-600"
//                   : "bg-gradient-to-br from-gray-50 to-blue-50"
//               }`}
//             >
//               {/* Title + Status */}
//               <div className="flex items-start justify-between mb-4">
//                 <h3
//                   className={`text-xl font-bold ${
//                     isDarkMode ? "text-white" : "text-gray-800"
//                   }`}
//                 >
//                   {project.title}
//                 </h3>
//                 <span
//                   className={`text-xs px-2 py-1 rounded-full ${
//                     project.status === "Live"
//                       ? isDarkMode
//                         ? "bg-green-900 text-green-200"
//                         : "bg-green-100 text-green-800"
//                       : project.status === "In Progress"
//                       ? isDarkMode
//                         ? "bg-yellow-900 text-yellow-200"
//                         : "bg-yellow-100 text-yellow-800"
//                       : isDarkMode
//                       ? "bg-gray-600 text-gray-300"
//                       : "bg-gray-200 text-gray-700"
//                   }`}
//                 >
//                   {project.status}
//                 </span>
//               </div>

//               {/* Description */}
//               <p
//                 className={`mb-4 text-sm leading-relaxed ${
//                   isDarkMode ? "text-gray-300" : "text-gray-600"
//                 }`}
//               >
//                 {project.description}
//               </p>

//               {/* Key Features */}
//               <div className="mb-4">
//                 <h4
//                   className={`font-semibold mb-2 ${
//                     isDarkMode ? "text-white" : "text-gray-800"
//                   }`}
//                 >
//                   Key Features:
//                 </h4>
//                 <ul className="space-y-1">
//                   {project.features.map((feature, i) => (
//                     <li
//                       key={i}
//                       className={`text-sm flex items-start gap-2 ${
//                         isDarkMode ? "text-gray-300" : "text-gray-600"
//                       }`}
//                     >
//                       <div className="flex-shrink-0 w-1 h-1 mt-2 bg-blue-600 rounded-full"></div>
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Tech Stack */}
//               <div className="mb-4">
//                 <div className="flex flex-wrap gap-2">
//                   {project.tech.slice(0, 3).map((tech, i) => (
//                     <span
//                       key={i}
//                       className={`text-xs px-2 py-1 rounded ${
//                         isDarkMode
//                           ? "bg-blue-900 text-blue-200"
//                           : "bg-blue-100 text-blue-800"
//                       }`}
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                   {project.tech.length > 3 && (
//                     <span
//                       className={`text-xs px-2 py-1 rounded ${
//                         isDarkMode
//                           ? "bg-gray-600 text-gray-300"
//                           : "bg-gray-100 text-gray-600"
//                       }`}
//                     >
//                       +{project.tech.length - 3} more
//                     </span>
//                   )}
//                 </div>
//               </div>

//               {/* Link */}
//               {project.link !== "#" && (
//                 <a
//                   href={project.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={`inline-flex items-center gap-2 font-semibold transition-colors ${
//                     isDarkMode
//                       ? "text-blue-400 hover:text-blue-300"
//                       : "text-blue-600 hover:text-blue-800"
//                   }`}
//                 >
//                   <ExternalLink size={16} />
//                   View Live Project
//                 </a>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
