import React from 'react';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/home/Home';
import { useState } from 'react';

function App() {
  const [darkMode, setdarkMode] = useState(false);

  function toggleMode(){
    setdarkMode(!darkMode);
  }
  return (
    <>
      <div className={`${darkMode ? 'dark' : ''} `}>
        <div className=' font-sans bg-custom-white dark:bg-black transition duration-300 ease-in-out'>
         <Navbar toggleMode={toggleMode}/>
         <Home/>
        </div>
      </div>
    </>
  );
}

export default App;
