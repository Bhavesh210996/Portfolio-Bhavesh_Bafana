import Section from "../components/UI/Section";
import { DATA } from "../data/data";

const Experience = () => (
  <Section id="experience" title="Experience">
    <div className="timeline">
      {DATA.experience.map((exp) => (
        <div key={exp.company} className="timeline__item">
          <div className="timeline__dot" />
          <div className="timeline__content">
            <h3>{exp.role}</h3>
            <p className="muted">{exp.company}</p>
            <p className="muted">{exp.period}</p>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default Experience;