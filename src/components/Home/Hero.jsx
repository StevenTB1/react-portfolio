import { motion } from "framer-motion";
import ProfilePicture from '../../assets/images/pfp.png'

const fadeIn = (delay) => ({
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      duration: 0.6, 
      delay, 
      ease: "easeOut" 
    } 
  }
});

const Hero = () => {
  return (
    <div className="border-b-2 border-neutral-500 flex items-center justify-center text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full space-y-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            className="lg:w-1/2 space-y-6 text-center lg:text-left"
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              variants={fadeIn(0.2)}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
            >
              Steven Chow
            </motion.h1>
            <motion.span 
              variants={fadeIn(0.4)}
              className="block text-2xl sm:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent"
            >
              Mechatronics Engineer
            </motion.span>
            <motion.p 
              variants={fadeIn(0.6)}
              className="mt-3 max-w-md mx-auto lg:mx-0 text-xl text-gray-300 sm:text-2xl md:mt-5 md:max-w-3xl"
            >
              Passionate mechatronics engineering student at the University of Waterloo, pursuing my undergrad with a focus on innovative solutions.
            </motion.p>
            <motion.p 
              variants={fadeIn(0.8)}
              className="mt-3 max-w-md mx-auto lg:mx-0 text-base text-gray-400 sm:text-lg md:mt-5 md:max-w-3xl"
            >
              Experienced in front-end development with React and Tailwind CSS. Proficient in AutoCAD and Solidworks for mechanical design, with hands-on manufacturing experience.
            </motion.p>
          </motion.div>
          <motion.div 
            className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end"
            variants={fadeIn(1)}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl"
            >
              <img
                src={ProfilePicture}
                alt="Steven Chow"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero;