import React, { Suspense, useEffect } from 'react';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/loader/Loader';
import TrashNote from './components/trash/DeleteNote';
import { ScaleLoader } from 'react-spinners';

const Home = React.lazy(()=> import('./components/home/Home'))
const FavoriteNote = React.lazy(()=> import('./components/home/FavoriteNote'))
const ArcheiveNotes = React.lazy(()=> import('./components/home/ArcheiveNotes'))
const Login = React.lazy(()=> import('./components/userAuth/login/Login'))

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
              
                <Suspense fallback={  <div className=' flex justify-center items-center h-screen'><ScaleLoader color="red" /></div>}>
                  <Routes>
                    <Route path='/' element={<Login/>} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/favoriteNote' element={<FavoriteNote />} />
                    <Route path='/ArchiveNote' element={<ArcheiveNotes />} />
                    <Route path='/TrashNote' element={<TrashNote/>}/>
                  </Routes>
                </Suspense> 
              </>
          }
        </div>
      </div>
    </>
  );
}

export default App;
