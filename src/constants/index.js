import {
    animation,
    automation,
    web,
    javascript,
    python,
    java,
    html,
    css,
    reactjs,
    vite,
    tailwind,
    mongodb,
    git,
    kbw,
    juliusbaer,
    voronoi,
    newsapp,
    threejs,
    blender
  } from "../assets";
  
  export const navLinks = [
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Automation Developer",
      icon: automation,
    },
    {
      title: "Web Animation Designer",
      icon: animation,
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
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Vite",
      icon: vite,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Blender",
      icon: blender,
    },
  ];
  
  const experiences = [
    {
      title: "IMS (Informatikmittelschule)",
      company_name: "KBW",
      icon: kbw,
      iconBg: "#fff",
      date: "Aug 2018 - July 2021",
      points: [
        "Learned the basics of programming with Java and JavaScript",
        "Studied the basics of other subjects such as Law, Science, Maths and Languages",
        "Created Projects in Teams using a  Scrum and agile approach",
      ],
    },
    {
      title: "Internship",
      company_name: "Julius Baer",
      icon: juliusbaer,
      iconBg: "#141D54",
      date: "Aug 2021 - July 2022",
      points: [
        "This internship was needed for my final degree as Software Engineer",
        "Implemented automations with Python scripts, which run weekly",
        "First approach with big Data clusters and analysis",
        "Worked with an agile approach",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Julius Baer",
      icon: juliusbaer,
      iconBg: "#141D54",
      date: "Aug 2022 - Present",
      points: [
        "Developed and Monitored new automated Python scripts in Kibana",
        "Managed access rights for all end-users and applications",
        "Implemented new approach to simplify the onboarding of end-users",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Voronoi Simulation",
      description:
        "JavaFX based programm, which simulates how a Voronoi parable is generated",
      tags: [
        {
          name: " Java",
          color: "pink-text-gradient",
        },
      ],
      image: voronoi,
      source_code_link: "https://github.com/IAbrahamI/SweepLine",
    },
    {
      name: "Mobile News App",
      description:
        "Mobile application that showcase the trending news from switzerland from NewsAPI",
      tags: [
        {
          name: " JavaScript",
          color: "green-text-gradient",
        },
        {
          name: " React",
          color: "blue-text-gradient",
        },
        {
          name: " Expo",
        },
      ],
      image: newsapp,
      source_code_link: "https://github.com/IAbrahamI/NewsUpToDateApp",
    }
  ];
  
  export { services, technologies, experiences, projects };