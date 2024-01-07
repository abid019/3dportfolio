import React from 'react'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import { useState } from 'react'
import { EarthCanvas } from './canvas'
const Contact = () => {
  const [form,setForm] = useState({
    name:"",
    email:"",
    message:""
  })
  const handleChange = (event)=>{
    // console.log(event.target.value)

  }
  return (
    <div className="xl:mt-12 xl:flex-row flex flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left","tween",0.2,1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <p className={styles.sectionHeadText}>Contact.</p>
        <form
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input type='text'
              name='name'
              onChange={handleChange}
              placeholder='What s your good name?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none' 
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input type='email'
              name='email'
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none' 
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea 
              rows={7}
              name='message'
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none' 
            />
          </label>
          <button type='submit'
            className='bg-tertiary px-8 py-3 w-fit font-bold text-white shadow-md shadow-primary'>Send</button>
        </form>
      </motion.div>
      <motion.div variants={slideIn("right","tween",0.2,1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
          <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")