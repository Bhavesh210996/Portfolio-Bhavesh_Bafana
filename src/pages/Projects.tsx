import { ExternalLink } from "lucide-react";
import { DATA } from "../data/data";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../components/UI/Section";
import { useState } from "react";
import { ProjectModal } from "../components/Projects/ProjectModal";

const Projects = () => {
  const [hovered, setHovered] = useState<Number | null>(null);

  return (
    <Section id="projects" title="Projects">
      <div className="grid">
        {DATA.projects.map((p, idx) => (
          <motion.article
            key={p.name}
            className="card"
            whileHover={{ y: -6 }}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            <div>

            <div className="card__icon">{p.icon}</div>
            <h3 className="card__title">{p.name}</h3>
            <p className="card__desc">{p.description}</p>
            </div>

            {/* Tech Chips */}
            <ul className="chips">
              {p.tags.map((t) => (
                <li key={t} className="chip chip--md">
                  {t}
                </li>
              ))}
            </ul>

            {/* Links */}
            {!!p.links?.length && (
              <div className="card__links"
              onMouseEnter={() => setHovered(null)}>
                {p.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn--ghost btn--sm"
                  >
                    <ExternalLink /> {l.label}
                  </a>
                ))}
              </div>
            )}
            {idx === hovered && <ProjectModal details={p.details} />}
          </motion.article>
        ))}
      </div>

    </Section>
  );
};

export default Projects;