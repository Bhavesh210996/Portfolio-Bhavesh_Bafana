import { Linkedin, Mail, Phone } from "lucide-react";
import { DATA } from "../data/data";
import Section from "../components/UI/Section";
import { ContactForm } from "../components/Contact/ContactForm";

const Contact = () => (
  <Section id="contact" title="Contact">
    <div className="contact-grid">
      <div className="contact-options">
        <span className="contact-link">
          <Phone /> {DATA.contact.phone}
        </span>
        <a href={`mailto:${DATA.contact.email}`} className="contact-link">
          <Mail /> {DATA.contact.email}
        </a>
        <a href={DATA.contact.linkedin} target="_blank" rel="noreferrer" className="contact-link">
          <Linkedin /> LinkedIn
        </a>
      </div>

      <ContactForm />

    </div>
  </Section>
);

export default Contact;