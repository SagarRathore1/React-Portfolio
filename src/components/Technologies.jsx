import {RiReactjsLine} from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiJavascript } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
import {motion} from "framer-motion";

const iconVariants = (duration)=>({
  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition: {
      duration: duration,
      ease:"linear",
      repeat: Infinity,
    }
  }
})
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 ">
      <motion.h1
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
       className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1.5}}
      className="flex flex-wrap  justify-center gap-4 ">
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <FaHtml5 className="text-7xl text-orange-500"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(3.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <FaCss3Alt className="text-7xl text-blue-500"/>
        </motion.div>
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <DiJavascript className="text-7xl text-yellow-500"/>
        </motion.div>
        <motion.div
        variants={iconVariants(3.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <RiReactjsLine className="text-7xl text-cyan-500 "/>
        </motion.div>
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <RiTailwindCssFill className="text-7xl text-cyan-600"/>
        </motion.div>
        <motion.div
        variants={iconVariants(3.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <AiFillGithub className="text-7xl text-black-600"/>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies;
