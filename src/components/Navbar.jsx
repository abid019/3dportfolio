import React from 'react'
import { useEffect,useState } from 'react'
import {menu,logo,close} from '../assets'
import {Link} from 'react-router-dom'
import {styles} from '../styles'
import { navLinks } from '../constants'
const Navbar = () => {
  const [active,setActive] = useState('')
  const [toggle,setToggle] = useState(false)
  const handleToggle = ()=>{
    toggle === false ? setToggle(true) : setToggle(false)
    console.log(toggle)
  }
  return (
    <nav className={`${styles.paddingX} w-full flex item-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='flex w-full justify-between items-center max-w-7xl mx-auto'>
        <Link to='/' className='class item-center gap-2 cursor-pointer flex'
        onClick={()=>{
          setActive("");
          window.scrollTo(0,0);
        }}>
          <img src={logo}  alt='logo' className='w-9 h-9 object-contain'/>
          <p className="font-bold text-white text-[18px] ">MD ABID HUSSAIN <span className="sm-block "> | Software Developer</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link)=>(
            <li key={link.id}
                className={`${active === link.title ? "text-white" : "text-secondary"}
                            hover:text-white text-[18px]`}
                onClick={()=>{setActive(link.title)}}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>


        {/* for small devices */}
        
        <div className="sm:hidden flex flex-1-justify-end items-center">
            <img src={toggle ? close : menu} /*  nahi samajh aaya, ulta kaam kr rha hai  */
                 alt="menu"
             className="w-[28px] h-[28px] object-contain cursor-pointer"
             onClick={handleToggle}
             />
        </div>
        <div className={`${!toggle ? 'hidden' : 'flex' } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex flex-col justify-end item-center' 
                onClick={handleToggle}>
              {navLinks.map((link)=>(
                <li key={link.id}
                    className={`${active === link.title ? "text-white" : "text-secondary"}
                                font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={()=>{setActive(link.title)}}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
        </div>
      </div>
      
    </nav>
  )
}

export default Navbar