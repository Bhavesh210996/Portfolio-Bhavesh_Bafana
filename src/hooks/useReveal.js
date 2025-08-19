import { useAnimation } from "framer-motion";
import { useEffect } from "react";

export const useReveal = () => {
  const controls = useAnimation();
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) controls.start({ opacity: 1, y: 0 });
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [controls]);
  return controls;
};