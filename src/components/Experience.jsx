import { EXPERIENCES } from '../constants/content'
import {motion} from "framer-motion";
import certificate from "../assets/projects/CertificateGSSOC.png"
const Experience = () => {
  return <div className='border-b border-neutral-900 pb-4 md:pl-24 sm:pl-24'>
    <motion.h1
     whileInView={{opacity:1,y:0}}
     initial={{opacity:0,y:-100}}
     transition={{duration:0.5}}
     className='my-20 sm:text-center text-center text-4xl sm:pr-14 sm:pl:14 '>Experience</motion.h1>
    <div>
      {EXPERIENCES.map((experience,index) =>(
        <div key={index} className='mb-8 flex flex-wrap lg:justify-center '>
          <motion.div
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:-100}}
          transition={{duration:1}}
          className='w-full lg:w-1/4'>
          
          <p className='mb-text-sm text-neutral-400'>
            {experience.year}
            </p>
            <div className="flex items-center justify-center pr-32 pt-12 pb-12 ">
                <motion.img
                initial={{x:100,opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{duration:1,delay:1}}

                 className="size-1/2 rounded-xl h-36 w-60  "  src={certificate} alt="Sagar Rathore" />
              </div>
            
          
            </motion.div>
            <motion.div 
             whileInView={{opacity:1,x:0}}
             initial={{opacity:0,x:100}}
             transition={{duration:1}}
            
            className="w-full max-w-xl lg:w-3/4">
            <h6 className='mb-2 font-semibold sm:pr-14 sm:pl:14'>{experience.role} -{" "} 
              <span className='text-sm text-purple-100 '>
                {experience.company}

              </span>
              </h6>
              <p className='mb-4 text-neutral-400 sm:pr-14 sm:pl:14'>{experience.description}</p>{experience.technologies.map((tech,index)=>(
                <span key={index}className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm text-medium text-purple-800'>{tech}</span>
              ))}
            
            </motion.div>
        </div>
      ))}
    </div>
    </div>
  
}

export default Experience;
