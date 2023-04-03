import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Known Technologies</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Technologies.</h2>
      </motion.div>
      <div className='mt-24 flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div>
            <div className='w-28 h-28 hidden sm:block' key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
            <div className='block sm:hidden justify-center'>
              <img src={technology.icon} className='w-32 h-32 justify-center align-bottom'/>
            </div>
          </div>
        ))}
      </div>
    </>
    
  );
};

export default SectionWrapper(Tech, "");