import React, { useState } from 'react'
import logo from '../image/logo.png';
import moon from '../image/moon.png';
import sun from '../image/sun.png';
import menu from '../image/menu.png';
import close from '../image/close.png'
const Navbar = (props) => {
  const [dark, setdark] = useState(false);
  const [isOpen, setisOpen] = useState(false);

  function toggleMenu() {
    setisOpen(!isOpen);
  }
  return (
    <>
      <nav className='bg-white w-full min-h-[45px]  md:h-[55px] shadow-lg dark:text-white dark:bg-slate-900 flex flex-wrap justify-between items-center transition duration-300 ease-in-out'>

        <div className='flex gap-2 md:gap-5 items-center'>
          <img src={logo} alt="...loading" className='w-7 h-7 ml-4 md:w-10 md:h-10 md:ml-9' />
          <p className='text-xl font-bold'> Note Manager</p>
        </div>
        <ul className={`md:flex items-center hidden cursor-pointer  `}>
          <li className='mx-4 text-lg font-semibold hover:border-b-2 border-black dark:border-white  transition duration-1000 '>Home</li>
          <li className='mx-4 text-lg font-semibold hover:border-b-2 border-black dark:border-white transition duration-1000 '>About</li>
          <li className='mx-4 text-lg font-semibold hover:border-b-2 border-black dark:border-white transition duration-1000 '>Contact</li>
        </ul>

        <div className='flex items-center'>
          <div onClick={() => { props.toggleMode(); setdark(!dark) }} className='cursor-pointer'>
            <img className='w-6 h-6 md:w-8 md:h-8 mr-5' src={dark ? sun : moon} alt="" />
          </div>


          <button className='mr-9 font-semibold text-lg '>
            <div className='items-center md:hidden ' onClick={toggleMenu}>
              <img className='w-8 h-8' src={isOpen ? close : menu} alt="" />
            </div>
          </button>
        </div>

       
      </nav>
      <div className={`md:hidden w-full bg-white p-4 dark:bg-slate-700 h-auto ${isOpen ? 'block' : 'hidden'}  `}>
          <ul className='flex flex-col items-center '>
            <li className='mx-4 text-lg font-semibold'>Home</li>
            <li className='mx-4 text-lg font-semibold'>About</li>
            <li className='mx-4 text-lg font-semibold'>Contact</li>
          </ul>
        </div>
    </>
  )
}

export default Navbar