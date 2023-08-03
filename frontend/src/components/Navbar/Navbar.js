import React, { useEffect, useState } from 'react'
import logo from '../image/logo.png';
import moon from '../image/moon.png';
import sun from '../image/sun.png';
import menu from '../image/menu.png';
import close from '../image/close.png';
import { useDispatch, useSelector } from 'react-redux';
import { sidebar } from '../../features/createslice/userSlice';
const Navbar = (props) => {
  const [dark, setdark] = useState(false);
  
  const value = useSelector((state)=> state.toggle.sidebar);
  const dispatch = useDispatch();
  
  function toggleMenu() {
    dispatch(sidebar());
  }
  return (
    <>
      <nav className='bg-white w-full min-h-[45px]  md:h-[55px] shadow-lg dark:text-white dark:bg-slate-900 flex flex-wrap justify-between items-center '>

        <div className='flex gap-2 md:gap-5 items-center'>
          <img src={logo} alt="...loading" className='w-7 h-7 ml-4 md:w-10 md:h-10 md:ml-9' />
          <p className='text-xl font-bold'> Note Manager</p>
        </div>
       

        <div className='flex items-center'>
          <div onClick={() => { props.toggleMode(); setdark(!dark) }} className='cursor-pointer'>
            <img className='w-6 h-6 md:w-8 md:h-8 mr-5' src={dark ? sun : moon} alt="" />
          </div>


          <button className='mr-9 font-semibold text-lg '>
            <div className='items-center md:hidden ' onClick={toggleMenu}>
              <img className='w-8 h-8' src={value ? close : menu} alt="" />
            </div>
          </button>
        </div>

       
      </nav>
      
    </>
  )
}

export default Navbar