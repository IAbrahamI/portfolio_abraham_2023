import {
    mobile,
    animation,
    automation,
    web,
    javascript,
    python,
    java,
    html,
    css,
    reactjs,
    nextjs,
    vite,
    tailwind,
    mongodb,
    git,
    kbw,
    juliusbaer,
    voronoi,
    jobit,
    tripguide,
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
      title: "React/Next/Vite Developer",
      icon: mobile,
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
      name: "NextJs",
      icon: nextjs,
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
      name: "git",
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
      title: "Praktikum",
      company_name: "Julius Baer",
      icon: juliusbaer,
      iconBg: "#141D54",
      date: "Aug 2021 - July 2022",
      points: [
        "Praktikum needed for getting my final degree as Software Engineer",
        "Implemented automations with Python scripts, which run weekly",
        "First approach with big Data clusters",
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
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
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
      image: "",
      source_code_link: "https://github.com/IAbrahamI/NewsUpToDateApp",
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects };