

import React from 'react';
import './Hero.css';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll'; // Added this for scroll target

const ContainerVariable = {
  hidden: { opacity: 0, x: -100 },
  visibility: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, staggerChildren: 0.5 },
  },
};

const childVariant = {
  hidden: { opacity: 0, x: -100 },
  visibility: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  return (
    <Element name="home"> {/* Scroll target name for Navbar */}
      <div className="pt-24 pb-2 lg:mb-12">

        <div className="flex flex-wrap lg:flex-row-reverse">
          
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2, ease: 'easeOut' }}
            >
              <img
                src="/images/img.jpg"
                alt="Hero"
                className="w-66 h-96 object-cover rounded-2xl border border-stone-900 shadow-md"
              />
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <motion.div
              className="flex flex-col items-center text-center lg:items-start lg:text-left mt-10"
              initial="hidden"
              animate="visibility"
              variants={ContainerVariable}
            >
              {/* Name Heading */}
              <motion.h2
                className="pt-12 text-2xl lg:text-4xl tracking-tighter"
                variants={childVariant}
              >
                Atchaya Vijayakumar
              </motion.h2>

              {/* Role with Gradient */}
              <motion.span
                className="typing-effect bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-2xl lg:text-3xl tracking-tight text-transparent"
                variants={childVariant}
              >
                MERN Full Stack Developer
              </motion.span>

              {/* Description */}
              <motion.p
                className="my-3 max-w-lg py-4 text-lg lg:text-xl leading-normal lg:leading-relaxed"
                variants={childVariant}
              >
                I am a passionate full stack developer with a knack for crafting robust and scalable web applications. My journey in web development has equipped me with skills in front-end technologies like React and back-end technologies like Node.js, MongoDB, and Express. I am eager to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.
              </motion.p>

              {/* Resume Link */}
              
<motion.a
  href="Atchaya-Developer.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white hover:bg-teal-500 text-stone-800 hover:text-white rounded-full px-6 py-3 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 mb-10"
  variants={childVariant}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  View Resume
</motion.a>

            </motion.div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Hero;
