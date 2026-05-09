import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) => {
  return function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className='max-w-7xl mx-auto relative z-0 sm:px-16 px-6 sm:py-16 py-10'
        id={idName}
      >
        <Component />
      </motion.section>
    );
  };
};

export default SectionWrapper;
