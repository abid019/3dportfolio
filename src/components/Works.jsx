// import React from "react"
import { Tilt } from "react-tilt"
import {motion} from 'framer-motion'
import { github } from "../assets"
import {styles} from '../styles'
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn,textVariant } from "../utils/motion"

const ProjectCard = ({project,index}) =>{
  return(
    
    <motion.section variants={fadeIn("up","spring",0.5*index,0.75)}
    >
      
      <Tilt options={{
      max:45,
      scale:1,
      speed:450}} 
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img src={project.image} alt={project.name} className="h-full w-full rounded-2xl"/> 
          <div className="absolute flex justify-end inset-0 m-3 card-img_hower ">
            <div onClick={()=>{
              window.open(project.source_code_link,"_blank")
            }} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src={github} alt="" className="w-1/2 h-1/2 object-contain"/>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h2 className="text-white font-bold text-[24px]">{project.name}</h2>  
          <p className="text-secondary text-[14px] mt-2">{project.description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag)=>(
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
            ))}
        </div>
      </Tilt>
    </motion.section>
    
  )
}
const Works = () => {
  return (
    <>
      <motion.div >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)}
        className="text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Following projects showcases my skills and experience through
        real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        
      </motion.p>
      <div className="flex gap-7 mt-20 flex-wrap">
        {projects.map((project,index)=>(
          <div key={index}>
            <ProjectCard project={project} index={index}/>
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works,"work")