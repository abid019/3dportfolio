import React from 'react'
import {styles} from '../styles'
import {motion} from 'framer-motion'
import { textVariant,fadeIn } from '../utils/motion'
import { testimonials } from '../constants'
import { SectionWrapper } from '../hoc'
const TestimonialCard=({index,t})=>{
  return(
    <motion.div variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 rounded-3xl p-10 xs:w-[320px] w-full'>
      <p className='text-white font-black text-[48px]'>"</p>
      <div className='text-white tracking-wider text-[18px]'>
        <p>{t.testimonial}</p>
        <div className='flex justify-between items-center mt-7'>
          <div>
            <p className=''><span className='blue-text-gradient'>@ </span>{t.name}</p>
            <p className='text-secondary text-[12px]'>{t.designation} of {t.company} </p>
          </div>
          <div>
            <img src={t.image} alt={t.name} className='w-[40px] h-[40px] rounded-full object-cover' />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
const Feedbacks = () => {
  return (
    <div className='bg-black-100 mt-12 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary min-h-[300px] rounded-2xl`}>
        <motion.div variants={textVariant()}>
         
            <p className={styles.sectionSubText}>WHAT OTHERS SAY</p>
            <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} bg-tertiary rounded-2xl -mt-20 pb-14 flex  flex-wrap gap-7`}>
        {testimonials.map((t,index)=>(
            <TestimonialCard key={t.name} index={index} t={t}/>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks,"")