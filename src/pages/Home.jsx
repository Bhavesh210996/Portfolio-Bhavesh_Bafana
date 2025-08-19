import { motion } from "framer-motion";
import { DATA } from "../data/data";
import { useAccentClass } from "../hooks/useAccentClass";
import { useReveal } from "../hooks/useReveal";
import { cn } from "../utils/helper";

export const Home = () => {
  const controls = useReveal();
  const accent = useAccentClass();

  return (
    <section id="home" className={cn("section home", accent)}>
      <motion.div
        className="container home__wrap"
        data-reveal
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.6 }}
      >
        <div className="home__text">
          <p className="home__intro">👋 Hi, I’m</p>
          <h1 className="home__name">{DATA.name}</h1>
          <h2 className="home__role">{DATA.role}</h2>

          <p className="home__subtitle">
            {DATA.summary}
          </p>

          <div className="home__cta">
            <a href="projects" className="btn btn--primary">View Projects</a>
            <a href="contact" className="btn btn--ghost">Contact Me</a>
          </div>
        </div>

        <motion.div
          className="home__profile"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="profile-card">
            <img src="profile-img.jpg" alt="Profile" className="profile-img" />
          </div>
        </motion.div>
      </motion.div>

      <div className="home__bg" aria-hidden>
        <div className="blob blob--1" />
        <div className="blob blob--2" />
        <div className="mesh" />
      </div>
    </section>
  );
};
