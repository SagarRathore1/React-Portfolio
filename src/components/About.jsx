import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants/content";
import {motion} from "framer-motion";
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 
       whileInView={{opacity:1,y:0}}
       initial={{opacity:0,y:-100}}
       transition={{duration:1}}
        className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-50"> Me</span>
      </motion.h1>
      <div className="flex flex-wrap ">
        <motion.div 
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:2}}
        className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center md:pl-16">
            <img className="rounded-3xl " src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:2}}
        className="w-full lg:w-1/2 ">
          <div className="flex justify-center lg:justify-end">
            <p className=" pr-20 my-2 max-w-xl py-28  pl-20 ">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
