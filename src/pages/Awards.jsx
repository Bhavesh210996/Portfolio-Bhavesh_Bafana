import { Award } from "lucide-react";
import { DATA } from "../data/data";
import Section from "../components/UI/Section";

export const Awards = () => (
  <Section id="awards" title="Awards">
    <ul className="awardsList">
      {DATA.awards.map((a) => (
        <li key={a}><Award /> {a}</li>
      ))}
    </ul>
  </Section>
);