import React from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section = ({id, title, children } : SectionProps) => {
  return (
    <section id={id} className="section">
      <div className="container">
        <motion.h2
          className="section__title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;
