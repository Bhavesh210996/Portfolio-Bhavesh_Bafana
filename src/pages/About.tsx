import { track } from "@vercel/analytics";
import Section from "../components/UI/Section";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { FaReact, FaJsSquare, FaGitAlt, FaHtml5 } from "react-icons/fa";
import { SiNextdotjs, SiRedux, SiReactrouter, SiReactquery, SiSupabase, SiJest, SiTypescript } from "react-icons/si";

export const About = () => (
  <Section id="about" title="About">
    <div className="about">
      {/* LEFT SIDE */}
      <motion.div
        className="about__text"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p>
          Creative and detail-oriented Frontend Developer with proven expertise in building <strong>high-performance, responsive,
          and user-focused</strong> web applications  
        </p>
        <p>
          Proficient in modern <strong>JavaScript (ES6+), React, Next.js, and Redux</strong>, with
          hands-on experience in scalable <strong>component-based architecture</strong> and efficient <strong>state management</strong> using  <strong>React
          Hooks, Redux, Context API and React Query</strong>
        </p>

        <div className="resume-card">
          <h3>📄 My Resume</h3>
          <p>Download my detailed CV</p>
          <a href="/React-developer-Bhavesh_Bafana.pdf" download className="resume-link" onClick={() => track("Resume Download")}>
            <Download /> Get Resume
          </a>
        </div>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        className="about__skills"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="skills-heading">Skills</h2>
        <h3 className="skills-title">Frontend & Styling</h3>
        <div className="skills-grid">
          <div className="skill-card"><FaJsSquare className="skill-icon js" /> JavaScript (ES6+)</div>
          <div className="skill-card"><SiTypescript className="skill-icon js" /> TypeScript</div>
          <div className="skill-card"><FaHtml5 className="skill-icon html5" /> HTML5, CSS3, SCSS, LESS</div>
        </div>
        <h3 className="skills-title">React Ecosystem</h3>
        <div className="skills-grid">
          <div className="skill-card"><FaReact className="skill-icon react" /> React</div>
          <div className="skill-card"><SiNextdotjs className="skill-icon next" /> Next.js</div>
          <div className="skill-card"><SiReactrouter className="skill-icon router" /> React Router</div>
          <div className="skill-card"><SiReactquery className="skill-icon query" /> React Query</div>
          <div className="skill-card"><SiRedux className="skill-icon redux" /> Redux</div>
        </div>

        <h3 className="skills-title">Backend & Tools</h3>
        <div className="skills-grid">
          <div className="skill-card"><SiSupabase className="skill-icon supabase" /> Supabase</div>
          <div className="skill-card"><FaGitAlt className="skill-icon git" /> Git, GitHub, Bitbucket, Jira</div>
        </div>

        <h3 className="skills-title">Testing</h3>
        <div className="skills-grid">
          <div className="skill-card"><SiJest className="skill-icon jest" /> Jest</div>
          <div className="skill-card">React Testing Library</div>
        </div>
      </motion.div>
    </div>
  </Section>
);
