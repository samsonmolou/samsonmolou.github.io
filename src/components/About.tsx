import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionHeadText}>Introduction</p>
        <h2 className={styles.sectionSubText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
         I'm a skilled software developer with experience in Technology Consulting and
        Robotic Process Automation (UiPath, SAP iRPA, BluePrism, Power Automate), and
        in frameworks like React, AdonisJS, Ruby and Rails, Laravel, Symfony and Flutter.
        I'm a quick learner and collaborate closely with clients to create efficient, scalable, and
         user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>

      </div>
    </>
  )
}

export default About