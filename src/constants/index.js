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
    spotify,
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
    {
      title: "Social Media Marketing",
      icon: backend,
    },
    {
      title: "Blockchain Development",
      icon: creator,
      sub: 'learning',
    },
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
        "I have done remote work for few clients."
      ],
    },
    {
      title: "Web-Developer",
      
      icon: web,
      iconBg: "#E6DEDD",
      points: [
        "Developing full stack websites using MERN ",
        "Working as developer at a startup - Mentorrnow"
            ],
    },
   
   
  ];
  
  const testimonials = [
    {
      testimonial:
        "",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
   
  ];
  
  const projects = [
    {
      name: "Spotify-clone",
      description:
        "A clone-app of spotify",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "react-context-api",
          color: "green-text-gradient",
        },
        {
          name: "flexbox",
          color: "pink-text-gradient",
        },
      ],
      image: spotify,
      source_code_link: "https://github.com/jayprakash25/Spotify-clone.git",
    },
  
  ];
  
  export { navLinks, services, technologies, experiences, testimonials, projects };