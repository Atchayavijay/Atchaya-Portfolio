import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const certifications = [
  {
    title: "MERN Full Stack Course Completion Certificate",
    image: "/images/GuviCertification - FSD.png",
    description:
      "Completion certificate for the MERN Full Stack Development course, showcasing skills in MongoDB, React, Node.js, and Express.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    url: "https://drive.google.com/file/d/1U5Z8BznruhwJJorydnm6jWynBRO4c4gZ/view?usp=drivesdk",
  },
  {
    title: "HTML, CSS, TailwindCSS Proficiency Certificate",
    image: "/images/GuviCertification - HTML.png",
    description:
      "Certificate awarded for excellence in HTML and creating structured web layouts.",
    technologies: ["HTML", "CSS", "TailwindCSS"],
    url: "https://drive.google.com/file/d/1TsAbVHk3QpZnEsyaCVGzvLFpp_jkW9ln/view?usp=drivesdk",
  },
  {
    title: "Database Certification",
    image: "/images/GuviCertification - Databases.png",
    description:
      "Recognition of skills in MongoDB, focusing on database design and management for web applications.",
    technologies: ["MongoDB", "MYSQL"],
    url: "https://drive.google.com/file/d/1TfMJr8o8Vca87vXSLl8PfuFSMxEXRnMv/view?usp=drivesdk",
  },
  {
    title: "Node.js Certification",
    image: "/images/GuviCertification - Nodejs.png",
    description:
      "Certified skills in Node.js for server-side development and API integration.",
    technologies: ["Node.js", "Express.js", "React.js"],
    url: "https://drive.google.com/file/d/1TernA0bQV6148K6r1iQ5cdU5S0XCwyi-/view?usp=drivesdk",
  },
  {
    title: "React.js Certification",
    image: "/images/GuviCertification - Reactjs.png",
    description:
      "Certificate of excellence in React.js, specializing in component-based UI development.",
    technologies: ["HTML", "TailwindCSS", "React.js"],
    url: "https://drive.google.com/file/d/1TjwZJWjxKeZ7dJxI214PmkjNBj9OT6l0/view?usp=drivesdk",
  },
  {
    title: "JavaScript Certification",
    image: "/images/GuviCertification - Javascript.png",
    description:
      "Certification for JavaScript programming, covering ES6 features and DOM manipulation.",
    technologies: ["JavaScript", "TailwindCSS", "React"],
    url: "https://drive.google.com/file/d/1ToEIqST63LwOehE1hrkdEDSjhmHd46A9/view?usp=drivesdk",
  },
];

const Certification = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-16 px-4 text-white " id="certifications">
      <h2 className="mb-16 text-center text-4xl font-bold">Certifications</h2>
      <div className="max-w-5xl mx-auto flex flex-col items-center space-y-16">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center gap-6 w-full"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <div className="flex justify-center w-full sm:w-64">
              <a href={cert.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="rounded-lg shadow-md transition duration-300 w-full max-w-[250px]"
                />
              </a>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-stone-400 mb-3">{cert.description}</p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {cert.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-stone-800 text-stone-300 px-3 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certification;
