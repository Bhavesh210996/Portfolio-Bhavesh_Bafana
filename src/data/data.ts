import { details } from "framer-motion/client";
import { Database, Gauge, PlayCircle, Zap } from "lucide-react";
import React from "react";

interface contactType {
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  portfolio: string;
}

interface experienceType {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

interface projectType {
  name: string;
  description: string;
  tags: string[];
  links: { href: string; label: string }[];
  icon: React.ReactElement;
  details: string[];
}

interface DataType {
  name: string;
  role: string;
  contact: contactType;
  summary: string;
  skills: string[];
  experience: experienceType[];
  projects: projectType[];
  awards: string[];
}

export const DATA = {
  name: "Bhavesh Bafana",
  role: "Frontend Developer - React | Javscript | Next.js | Redux | jQuery",
  contact: {
    phone: "+91 8805798998",
    email: "bafanabrb@gmail.com",
    linkedin: "https://www.linkedin.com/in/bhaveshbafana",
    github: "https://github.com/Bhavesh210996/The-Fab-Thread-ecomm",
    portfolio: "https://fabthread.vercel.app/",
  },
  summary:
    "Creative and detail‑oriented Frontend Developer skilled in React, Next.js, Redux, and modern performance techniques. Focused on accessible, responsive, and high‑performance UIs.",
  skills: [
    "JavaScript (ES6+)",
    "React, Next.js",
    "Redux / Redux Toolkit",
    "React Router, React Query",
    "HTML5, CSS3, SCSS",
    "Jest, React Testing Library",
    "Supabase, REST APIs",
    "Git, GitHub, Bitbucket, Jira",
  ],
  experience: [
    {
      company: "Tata Consultancy Services (TCS)",
      role: "System Engineer — Frontend Developer",
      period: "May 2022 – Present",
      bullets: [
        "Built and maintained responsive web apps with React, Next.js, Redux.",
        "Optimized performance using hooks, memoization, lazy loading, and caching.",
        "Integrated REST APIs and improved global state management.",
      ],
    },
  ],
  projects: [
    {
      name: "Honeywell Building Solution (E‑Commerce Modules)",
      description:
        "Honeywell is B2B ecommerce platform which is built on two different technologies: AEM (Adobe Experience Manager) and SAP Hybris. Worked as a Frontend Developer, Gained practical experience in integrating commerce technologies to deliver a unified and seamless user experience",
      tags: ["React", "Javascript", "Next.js", "Redux", "jQuery", "LESS"],
      links: [],
      icon: React.createElement(Gauge),
      details: [
        "Developed and optimized key e-commerce pages such as Product Listing Page, Cart, Product Detail Page (PDP), Checkout using React JS, Javascript, Redux.",
        "Optimized Cart performance by implementing lazy loading for 300+ cart items, reducing load time from 15 minutes to 45 seconds.",
        "Implemented virtual rendering and image lazy loading on the product listing page, reducing initial load time by 30%.",
      ]
    },
    {
      name: "Mastercard",
      description:
        "Responsive conversion tool with dynamic updates and animated transitions; cross‑browser compatible UI.",
      tags: ["JavaScript", "SCSS", "HTML"],
      links: [],
      icon: React.createElement(Zap),
      details: [
        "Developed a responsive Mastercard Currency Conversion page using JavaScript and SCSS.",
        "Implemented real-time currency conversion logic with JavaScript, enabling accurate and dynamic updates based on user-selected currencies and input values.",
        "Integrated API/data simulation for currency rates to demonstrate realistic conversion outputs for various currency pairs."
      ]
    },
    {
      name: "Exelon Corporation",
      description:
        "Reusable media components; auto‑play on hover using HTML5 <video> API and React events.",
      tags: ["React", "HTML5", "SCSS"],
      links: [],
      icon: React.createElement(PlayCircle),
      details: [
        "Built reusable and responsive components that support multimedia content using React and CSS.",
        "Developed custom video card components where videos auto-play on hover and pause on mouse leave, leveraging the HTML5 <video> API and React event handling.",
        "Enhanced interactivity using modern JS and media APIs, improving user engagement with seamless video previews in UI cards.",
      ]
    },
    {
      name: "Fab Thread — eCommerce",
      description:
        "FabThread is an eCommerce platform I built using React.js, React Query, React Router, and Supabase. It provides a seamless shopping experience with dynamic product listings, user authentication, and real-time database interactions",
      tags: ["React", "Redux", "React Query", "React Router", "Supabase"],
      links: [
        { href: "https://fabthread.vercel.app/", label: "Live" },
        { href: "https://github.com/Bhavesh210996/The-Fab-Thread-ecomm", label: "GitHub" },
      ],
      icon: React.createElement(Database),
      details: [
        "Developed FabThread, a modern eCommerce platform using React, React Query, Redux, Context API, React Router, and Supabase.",
        "Utilized React Query for server-side state handling, ensuring real-time data fetching, caching, and synchronization.",
        "Utilized React lazy loading and code-splitting, reducing initial bundle size and improving first load performance by 40%",
        "Integrated Supabase’s cloud-hosted authentication and graphQl database to enable secure user login and reliable backend data operations."
      ]
    },
  ],
  awards: [
    "Star of the Month — TCS",
    "On‑the‑Spot Award (twice) — TCS",
  ],
} satisfies DataType;