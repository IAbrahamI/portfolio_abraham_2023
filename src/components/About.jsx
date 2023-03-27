import React from "react";
import Tilt from 'react-tilt';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div options={{max:45, scale:1, speed: 450}} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About me.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-6xl leading-[30px]">
        I'm a software engineer with experience in Python, Javascript, Java and expertise in frameworks like React, Node.js, Next.js, Vite, Three.js. 
        I'm a quick and logical lerner who likes to be up to date with the newest generation of frameworks and components to improve my skills. 
        I also like working agile as it allows me to be more flexible and open minded when collaborating with clients or end-users.
      </motion.p>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-6xl leading-[30px]">
        Since I was born in Colombia I'm currently able to speak in a variety of four different languages such as spanish being my native language, german and english, which I use daily and lastly french, which I learned at school.
        To keep myself healthy I do sport four to five times a week and to relax I play the guitar.
      </motion.p>
      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {services.map((service, index)=>(
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");