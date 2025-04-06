
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Element } from 'react-scroll';

export const EDUCATION = [
  {
    degree: "Bachelor of Engineering (B.E) in Electronics and Communication Engineering",
    institution: "Government College of Engineering, Thanjavur",
    year: "2019 - 2023",
    description: "Strong foundation in Electronics, problem-solving, programming, and system design, applied in software development"
  },
  {
    degree: "Higher Secondary Education (12th - Bio-Maths)",
    institution: "Amalraj Matriculation Higher Secondary School, Thanjavur",
    year: "2018 - 2019",
    description: "Specialized in Biology and Mathematics, scoring 75% overall.",
    grade: "75%"
  },
  {
    degree: "Secondary School Certificate (10th)",
    institution: "Government Higher Secondary School, Thirumanur",
    year: "2016 - 2017",
    description: "Completed high school with a strong focus on English and Mathematics, scoring 92% overall.",
    grade: "92%"
  }
];

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Element name="education">
      <section className="px-4 py-16 text-white">
        <h2 className="mb-12 text-center text-4xl font-bold">Education</h2>
        <div className="max-w-4xl mx-auto space-y-10">
          {EDUCATION.map((item, index) => (
            <div
              key={index}
              className="border-l-4 border-blue-500 pl-6"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <p className="text-sm text-gray-400 mb-1">{item.year}</p>
              <h3 className="text-xl font-semibold mb-1">{item.degree}</h3>
              <p className="text-gray-300 mb-1 italic">{item.institution}</p>
              <p className="text-gray-400">{item.description}</p>
              {item.grade && (
                <p className="mt-1 text-sm text-blue-400 font-medium">Grade: {item.grade}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </Element>
  );
};

export default Education;
