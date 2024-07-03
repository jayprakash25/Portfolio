import {
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  figma,
  threejs,
  mentor,
  mediatech,
  matrix,
  venovet,
  api,
  aipdf,
} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: " Full stack Web Developer",
    icon: web,
  },
  // {
  //   title: "Social Media Marketing",
  //   icon: backend,
  // },
  // {
  //   title: "Blockchain Development",
  //   icon: creator,
  //   sub: 'learning',
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },

  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",

    icon: reactjs,
    iconBg: "#383E56",
    points: [
      " I Develope and maintain web applications using React.js.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "I have done remote work for few clients.",
    ],
  },
  {
    title: "Web-Developer",

    icon: web,
    iconBg: "#E6DEDD",
    points: [
      "Developing full stack websites using MERN ",
      "Developed a website for a startup - MentorHeal.com ",
    ],
  },
];

const testimonials = [
  {
    testimonial: "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
];

const projects = [
  {
    name: "AI-PDF Query",
    description:
      "Developed a full-stack application using FastAPI. Integrated LangChain and OpenAIAPI for NLP to answer questions from uploaded PDFs",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "FASTAPI",
        color: "pink-text-gradient",
      },
    ],
    image: aipdf,
    source_code_link: "https://github.com/jayprakash25/AI-PDF-Frontend",
  },

  {
    name: "Matrix",
    description:
      "Created a Progressive Web App to connect users based on similar interests. Implemented features for posting content and chatting. Currently developing an AI-driven direct messaging feature. AI feature suggests conversation texts based on chat context (e.g., personal, sarcastic,love, flirting) to help users build conversations",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "yellow-text-gradient",
      },
    ],
    image: matrix,
    source_code_link: "https://github.com/jayprakash25/Matrix",
  },

  {
    name: "VENOVET",
    description:
      "Developed a 22-page dynamic website with editable content and images. Implemented an admin panel for client management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: venovet,
    view: "https://www.venovet.com/",
    source_code_link: "https://github.com/jayprakash25/Venovet.git",
  },

  {
    name: "Ecommerce-API",
    description:
      "Developed an eCommerce API. Implemented authentication, product listing, and order listing features. Provided all necessary features for users to build an eCommerce website",
    tags: [
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "express.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: api,
    view: "https://www.venovet.com/",
    source_code_link: "https://github.com/jayprakash25/Venovet.git",
  },
  {
    name: "MentorHeal",
    description:
      "A website for a startup who are trying to connect people with Mentors for holistic wellness.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: mentor,
    view: "https://mentorheal.com/",
    source_code_link: "https://github.com/jayprakash25/MentorHeal.git",
  },
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
};
