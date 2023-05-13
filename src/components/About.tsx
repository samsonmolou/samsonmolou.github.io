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
        <h2 className={styles.sectionSubText}>Overview</h2>
      </motion.div>
    </>
  )
}

export default About