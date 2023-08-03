import React, { useEffect } from 'react';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/home/Home';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import FavoriteNote from './components/home/FavoriteNote';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/home/Sidebar';
import ArcheiveNotes from './components/home/ArcheiveNotes';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Loader from './components/loader/Loader';

function App() {
  const [darkMode, setdarkMode] = useState(false);
  const [loading, setloading] = useState(true);

  function toggleMode() {
    setdarkMode(!darkMode);
  }

  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 1100);
  }, [])

  const sidebarOpen = useSelector((state) => state.toggle.sidebar);
  return (
    <>
      <div className={`${darkMode ? 'dark' : ''} `}>
        <div className=' font-sans bg-custom-white dark:bg-black relative transition duration-300 ease-in-out'>
          {
            loading === true ? <Loader />
              :
              <>
                <Navbar toggleMode={toggleMode} />
                <ToastContainer />
                <div className='w-full flex'>
                  <div className={`  md:w-[20%] ${sidebarOpen ? 'w-[60%] z-[50]  animate-slide-in' : 'w-0 z-0 overflow-hidden animate-slide-out delay-300'} md:animate-none md:z-0 md:block fixed z-[50] top-0 left-0 md:static  md:shadow-none shadow-md  `}>
                    <Sidebar />
                  </div>
                  <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/favoriteNote' element={<FavoriteNote />} />
                    <Route path='/ArchiveNote' element={<ArcheiveNotes />} />
                  </Routes>
                </div>
              </>
          }
        </div>
      </div>
    </>
  );
}

export default App;
