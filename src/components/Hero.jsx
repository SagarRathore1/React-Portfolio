import { HERO_CONTENT } from "../constants/content";
import profilePic from "../assets/myImage.jpg";
import { motion } from "framer-motion"


const container = (delay)=>({
  hidden:{x:-100,opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5 ,delay:delay}
  }
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 ">
      <div className="flex flex-wrap ">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start pt-12 gap-0 ">
            <motion.h1 
            variants={container(0)}
            initial="hidden"
            animate="visible"

            className="sm:text-center lg:pl-12 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Sagar Rathore
            </motion.h1>
            <motion.span  variants={container(0.75)}
            initial="hidden"
            animate="visible"
             className="sm:text-center lg:pl-14  bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent ">
              Frontend Developer
            </motion.span>
            <motion.p  variants={container(1)}
            initial="hidden"
            animate="visible"
            className="lg:pl-16 sm:pr-16  xl:pr-2  md:pl-16 sm:pl-16 sm:p-9 xl:text:center  y-2 max-w-xl py-6 font-light tracking-tighter ">
              {HERO_CONTENT}
            </motion.p>
           
            </div>
          </div>
          <div className="w-full lg:w-1/2 lh:p-8">
              <div className="flex justify-center sm:pr-16 sm:pl-16 ">
                <motion.img
                initial={{x:100,opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{duration:1,delay:1}}

                 className="size-1/2 rounded-3xl h-96 w-96 "  src={profilePic} alt="Sagar Rathore" />
              </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
