import { motion } from "framer-motion";
import { styles } from "../styles";
const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        id={idName}
      >
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
