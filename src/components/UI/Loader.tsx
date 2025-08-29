
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="loader-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="loader">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p>Sending your message...</p>
    </motion.div>
  );
};

export default Loader;
