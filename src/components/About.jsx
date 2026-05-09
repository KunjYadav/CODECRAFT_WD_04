/* eslint-disable react-refresh/only-export-components */
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

// Importing the assets you already have configured
import { web, mobile, backend, creator } from "../assets";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";

// Defining the cards based on your assets
const services = [
  { title: "Frontend Developer", icon: web },
  { title: "Backend Developer", icon: backend },
  { title: "React/Next.js Dev", icon: mobile },
  { title: "Full Stack Engineer", icon: creator },
];

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full bg-gradient-to-r from-[#00cea8] to-[#bf61ff] p-[1px] rounded-[20px] shadow-lg'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-[#151030] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img src={icon} alt={title} className='w-16 h-16 object-contain' />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className='sm:text-[18px] text-[14px] text-gray-400 uppercase tracking-wider'>
          Introduction
        </p>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-gray-300 text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a full-stack developer with two years of professional experience
        building dynamic, scalable, and responsive web applications. My
        expertise spans across modern JavaScript ecosystems, focusing heavily on
        React, Next.js, and TypeScript on the frontend, paired with robust
        backend architectures using Node.js, Express, and MongoDB. I enjoy
        tackling complex problems—whether it's orchestrating real-time chat
        systems or optimizing e-commerce storefronts—and turning ideas into
        efficient, user-centric solutions.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
