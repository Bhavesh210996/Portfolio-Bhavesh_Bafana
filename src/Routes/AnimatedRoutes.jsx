import { Route, Routes, useLocation } from "react-router-dom";
import { About } from "../pages/About";
import { Experience } from "../pages/Experience";
import { Projects } from "../pages/Projects";
import { Awards } from "../pages/Awards";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";

export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/awards" element={<Awards />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};