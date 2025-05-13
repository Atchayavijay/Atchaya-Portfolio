

import { motion } from "framer-motion";


const experiences = [
  {
    role: "Graduate Engineering Trainee",
    company: "ZF Group, Chengalpattu",
    duration: "Jan 2023 - Feb 2024",
    points: [
      "Assisted in optimizing production processes through quality checks and improvements.",
      "Collaborated with cross-functional teams to enhance product quality.",
      "Awarded White Tag Championship for outstanding problem-solving skills.",
    ],
  },
 
];

const Experience = () => {
  return (
    <section className="text-white py-20 px-6 md:px-20" id="Experience">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
  Experience
</h2>


        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-teal-500/20 transition duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold text-teal-400">{exp.role}</h3>
              <p className="text-sm text-gray-300">{exp.company}</p>
              <p className="text-xs text-gray-400 italic">{exp.duration}</p>
              <ul className="mt-3 list-disc list-inside space-y-1 text-gray-300">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
