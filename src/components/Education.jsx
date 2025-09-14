import React from "react";
import { GraduationCap, Award } from "lucide-react";
import { motion } from "framer-motion";

const Education = ({ isDarkMode }) => {
  const educationData = [
    {
      degree: "B-Tech | Computer Science and Engineering",
      institute: "Suyash Institute of Information Technology, Gorakhpur",
      year: "2027",
    },
    {
      degree: "Diploma in Computer Science and Engineering",
      institute: "Mahamaya Polytechnic College, Maharajganj",
      year: "2023",
    },
    {
      degree: "Intermediate",
      institute: "PIC Partawal Bazar, Maharajganj",
      year: "2021",
    },
    {
      degree: "High School",
      institute: "PG Senior Secondary School, Kaptainganj",
      year: "2019",
    },
  ];

  const certificationsData = [
    { title: "MERN Stack Development", provider: "Ducat India" },
    { title: "Full Stack Web Development", provider: "Infosys Springboard" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="education"
      className={`py-20 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Education & Certifications
        </h2>

        <div className="flex flex-col gap-12">
          {/* Education */}
          <div>
            <h3
              className={`text-2xl font-bold mb-8 flex items-center gap-3 ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              <GraduationCap className="text-blue-600" />
              Education
            </h3>
            <div className="space-y-6">
              {educationData.map((edu, i) => (
                <motion.div
                  key={i}
                  className={`p-6 rounded-xl transition-colors ${
                    isDarkMode
                      ? "bg-gradient-to-r from-gray-700 to-gray-600"
                      : "bg-gradient-to-r from-blue-50 to-purple-50"
                  }`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  variants={cardVariants}
                >
                  <h4
                    className={`font-bold ${
                      isDarkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {edu.degree}
                  </h4>
                  <p className="text-blue-600">{edu.institute}</p>
                  <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                    {edu.year}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3
              className={`text-2xl font-bold mb-8 flex items-center gap-3 ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              <Award className="text-blue-600" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certificationsData.map((cert, i) => (
                <motion.div
                  key={i}
                  className={`p-6 rounded-xl transition-colors ${
                    isDarkMode
                      ? "bg-gradient-to-r from-gray-700 to-gray-600"
                      : i === 0
                      ? "bg-gradient-to-r from-green-50 to-blue-50"
                      : "bg-gradient-to-r from-purple-50 to-pink-50"
                  }`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  variants={cardVariants}
                >
                  <h4
                    className={`font-bold ${
                      isDarkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {cert.title}
                  </h4>
                  <p className={i === 0 ? "text-green-600" : "text-purple-600"}>
                    {cert.provider}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;







// import React from "react";
// import { GraduationCap, Award } from "lucide-react"; // icons

// const Education = ({isDarkMode}) => {

//   return (
//     <section
//       id="education"
//       className={`py-20 transition-colors duration-300 ${
//         isDarkMode ? "bg-gray-800" : "bg-white"
//       }`}
//     >
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//           Education & Certifications
//         </h2>

//         <div className="flex flex-col gap-4">
//           {/* Education */}
//           <div>
//             <h3
//               className={`text-2xl font-bold mb-8 flex items-center gap-3 ${
//                 isDarkMode ? "text-white" : "text-gray-800"
//               }`}
//             >
//               <GraduationCap className="text-blue-600" />
//               Education
//             </h3>
//             <div className="space-y-6">
//               {[
//                 {
//                   degree: "B-Tech | Computer Science and Engineering",
//                   institute:
//                     "Suyash Institute of Information Technology, Gorakhpur",
//                   year: "2027",
//                 },
//                 {
//                   degree: "Diploma in Computer Science and Engineering",
//                   institute: "Mahamaya Polytechnic College, Maharajganj",
//                   year: "2023",
//                 },
//                 {
//                   degree: "Intermediate",
//                   institute: "PIC Partawal Bazar, Maharajganj",
//                   year: "2021",
//                 },
//                 {
//                   degree: "High School",
//                   institute: "PG Senior Secondary School, Kaptainganj",
//                   year: "2019",
//                 },
//               ].map((edu, i) => (
//                 <div
//                   key={i}
//                   className={`p-6 rounded-xl transition-colors ${
//                     isDarkMode
//                       ? "bg-gradient-to-r from-gray-700 to-gray-600"
//                       : "bg-gradient-to-r from-blue-50 to-purple-50"
//                   }`}
//                 >
//                   <h4
//                     className={`font-bold ${
//                       isDarkMode ? "text-white" : "text-gray-800"
//                     }`}
//                   >
//                     {edu.degree}
//                   </h4>
//                   <p className="text-blue-600">{edu.institute}</p>
//                   <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
//                     {edu.year}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Certifications */}
//           <div>
//             <h3
//               className={`text-2xl font-bold mb-8 flex items-center gap-3 ${
//                 isDarkMode ? "text-white" : "text-gray-800"
//               }`}
//             >
//               <Award className="text-blue-600" />
//               Certifications
//             </h3>
//             <div className="space-y-4">
//               {[
//                 { title: "MERN Stack Development", provider: "Ducat India" },
//                 {
//                   title: "Full Stack Web Development",
//                   provider: "Infosys Springboard",
//                 },
//               ].map((cert, i) => (
//                 <div
//                   key={i}
//                   className={`p-6 rounded-xl transition-colors ${
//                     isDarkMode
//                       ? "bg-gradient-to-r from-gray-700 to-gray-600"
//                       : i === 0
//                       ? "bg-gradient-to-r from-green-50 to-blue-50"
//                       : "bg-gradient-to-r from-purple-50 to-pink-50"
//                   }`}
//                 >
//                   <h4
//                     className={`font-bold ${
//                       isDarkMode ? "text-white" : "text-gray-800"
//                     }`}
//                   >
//                     {cert.title}
//                   </h4>
//                   <p
//                     className={
//                       i === 0
//                         ? "text-green-600"
//                         : "text-purple-600"
//                     }
//                   >
//                     {cert.provider}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;
