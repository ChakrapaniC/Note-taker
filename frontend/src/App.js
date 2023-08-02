import React from 'react';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/home/Home';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import FavoriteNote from './components/home/FavoriteNote';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/home/Sidebar';

function App() {
  const [darkMode, setdarkMode] = useState(false);
  const [isOpen, setisOpen] = useState(false);

  function toggleMode() {
    setdarkMode(!darkMode);
  }
  function toggleMenu() {
    setisOpen(!isOpen);
    console.log(isOpen)
  }
  return (
    <>
      <div className={`${darkMode ? 'dark' : ''} `}>
        <div className=' font-sans bg-custom-white dark:bg-black relative transition duration-300 ease-in-out'>
          <Navbar toggleMode={toggleMode} />
          <ToastContainer />
          <div className='w-full flex'>
            <div className={`  md:w-[20%] ${isOpen ? 'w-[60%] z-[50]  animate-slide-in' : 'w-0 z-0 overflow-hidden animate-slide-out delay-300'} md:animate-none md:z-0 md:block fixed z-[50] top-0 left-0 md:static  md:shadow-none shadow-md  `}>
              <Sidebar toggleMenu={toggleMenu} />
            </div>
            <Routes>
              <Route path='/' element={<Home toggleMenu={toggleMenu} />} />
              <Route path='/favoriteNote' element={<FavoriteNote />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
