import React from "react";

const lazyPages: Record<string, React.LazyExoticComponent<any>> = {
  Home: React.lazy(() => import("../pages/Home")),
  About: React.lazy(() => import("../pages/About")),
  Contact: React.lazy(() => import("../pages/Contact")),
  Experience: React.lazy(() => import("../pages/Experience")),
  Projects: React.lazy(() => import("../pages/Projects")),
  Awards: React.lazy(() => import("../pages/Awards")),
};

export const lazyLoad = (page: string) => lazyPages[page];