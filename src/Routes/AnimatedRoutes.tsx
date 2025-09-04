import { Route, Routes, useLocation } from "react-router-dom";

import { lazyLoad } from "./lazyLoad";
import { Suspense } from "react";
import Loader from "../components/UI/Loader";
import Spinner from "../components/UI/Spinner";

const Home = lazyLoad("Home");
const About = lazyLoad("About");
const Experience = lazyLoad("Experience");
const Projects = lazyLoad("Projects");
const Awards = lazyLoad("Awards");
const Contact = lazyLoad("Contact");

export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <Suspense fallback={<Spinner />}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Suspense>
  );
};