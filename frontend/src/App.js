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
import Login from './components/userAuth/login/Login';

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
              
                 
                  <Routes>
                    <Route path='/login' element={<Login/>} />
                    <Route path='/' element={<Home />} />
                    <Route path='/favoriteNote' element={<FavoriteNote />} />
                    <Route path='/ArchiveNote' element={<ArcheiveNotes />} />
                  </Routes>
    
              </>
          }
        </div>
      </div>
    </>
  );
}

export default App;
