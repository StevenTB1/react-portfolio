import ProfilePicture from '../../assets/images/pfp.png'
import {motion} from "framer-motion";

const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visiable: {x: 0, opacity: 1, transition: {duration: 0.5, delay: delay}
  }
});

const Hero = () => {
  return (
    <div className="border-b-2 border-neutral-500 pb-4 lg:mb-35 mb-20">
      <div className="flex flex-wrap mb-10">
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <motion.h1 
                variants={container(0.5)}
                initial="hidden"
                animate="visiable"
                className="lg:pb-16 pb-6 text-5xl font-thin tracking-tight lg:mt-8 lg:text-7xl">Steven Chow</motion.h1>

                <motion.span 
                variants={container(0.75)}
                initial="hidden"
                animate="visiable"className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl lg:text-4xl text-transparent">Mechatronics Engineer</motion.span>

                <motion.p 
                variants={container(1)}
                initial="hidden"
                animate="visiable"
                className="indent-10 font-mono text-gray-200 my-6 max-w-xl text-xl px-4 py-5 font-light tracking-tighter">I am a passionate mechatronics engineering student in the Unviersity of Waterloo pursuing my undergrad.</motion.p>

                <motion.p 
                variants={container(1.25)}
                initial="hidden"
                animate="visiable"
                
                className="indent-10 font-mono text-gray-200 max-w-xl text-xl px-4 font-light tracking-tighter">
                    With experience of building different projects, I have honed my skill in front-end popular libraries like React and some CSS libraries like tailwind CSS. At the same time, with some mechanical experience in my background, I am familiar with AutoCAD and Solidworks for CAD-ing, and various manufacturing tools.</motion.p>
            </div>
        </div>
        <div className='w-full lg:w-1/2 mx-auto flex justify-center items-center mt-8'>
              <motion.img 
              variants={container(1.5)}
              initial="hidden"
              animate="visiable"
              whileHover={{scale: 1.05}}
              whileTap={{scale: 1.03}}
              className="max-h-[40rem]" src={ProfilePicture} alt="my picture"/>
        </div>
      </div>
    </div>
  )
}

export default Hero;
