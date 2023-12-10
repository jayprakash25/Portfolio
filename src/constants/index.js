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
  venovet,
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
  {
    name: "VENOVET",
    description:
      "I make Venovet's online presence work smoothly, improving how things move in logistics. I create custom solutions to help businesses succeed in this fast-paced world.",
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
    name: "Media-Tech",
    description: "A digital agency website.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: mediatech,
    view: "https://mediatech.tech/",
    source_code_link: "https://github.com/jayprakash25/Media-Tech.git",
  },
  {
    name: "Article-Share",
    description: "A website where users can share articles and get paid.",
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
        name: "node.js",
        color: "pink-text-gradient",
      },
      {
        name: "express.js",
        color: "blue-text-gradient",
      },
    ],
    image: "",
    source_code_link:
      "https://github.com/jayprakash25/ARTICLE-SHARE-FRONTEND.git",
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
