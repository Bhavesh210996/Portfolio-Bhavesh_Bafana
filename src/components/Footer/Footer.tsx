import { DATA } from "../../data/data";

export const Footer = () => (
  <footer className="footer">
    <div className="container footer__inner">
      <span>© {new Date().getFullYear()} {DATA.name}. All rights reserved.</span>
      <span className="muted">Built with React • Javascript • Redux</span>
    </div>
  </footer>
);
