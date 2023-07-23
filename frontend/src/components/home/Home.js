import React, { useState } from 'react';
import home from '../image/home-icon-silhouette.png';
import pin from '../image/pinboard.png';
import archive from '../image/download-file.png';
import fav from '../image/star.png';
import bin from '../image/delete.png';
import pen from '../image/edit.png';
import Card from './Card';



const Home = () => {
  const [isOpen, setisOpen] = useState(false);
  const [grid, setgrid] = useState(true);

  function toggleMenu() {
    setisOpen(!isOpen);
  }

  return (
    <>

      <div className='w-full  flex '>
        <aside className={` ${isOpen ? 'block animate-slide-in' : 'hidden animate-slide-out '} md:w-[20%]  w-[50%] md:z-0 md:block absolute z-[50] top-0 left-0 md:static md:shadow-none shadow-md  `}  >
          <div className='md:w-[80%] w-[100%] h-screen mx-auto mt-10 shadow-md  bg-white dark:bg-slate-900 dark:text-white rounded-lg border-none transition duration-300 ease-in-out'>
            <div className='float-right mr-4 mt-3 hover:text-red-500 text-3xl inline-block md:hidden ' onClick={toggleMenu}>
              <ion-icon name="close-outline"></ion-icon>
            </div>
            <ul className='flex flex-col mt-2'>
              <li className='flex gap-2 p-3 md:gap-4 md:p-5 mx-1 md:mx-4  hover:bg-red-400 hover:border-none hover:rounded-lg transition duration-300 ease-out hover:translate-x-1 hover:ease-in text-xl font-semibold'><img className='w-6 h-6 ' src={home} alt='' />Home</li>
              <li className='flex gap-2 p-3 md:gap-4 md:p-5 mx-1 md:mx-4  hover:bg-red-400 hover:border-none hover:rounded-lg transition duration-300 ease-out hover:translate-x-1 hover:ease-in text-xl font-semibold'><img className='w-6 h-6 ' src={pin} alt='' />Pined</li>
              <li className='flex gap-2 p-3 md:gap-4 md:p-5 mx-1 md:mx-4  hover:bg-red-400 hover:border-none hover:rounded-lg transition duration-300 ease-out hover:translate-x-1 hover:ease-in text-xl font-semibold'><img className='w-6 h-6 ' src={archive} alt='' />Archive</li>
              <li className='flex gap-2 p-3 md:gap-4 md:p-5 mx-1 md:mx-4  hover:bg-red-400 hover:border-none hover:rounded-lg transition duration-300 ease-out hover:translate-x-1 hover:ease-in text-xl font-semibold'><img className='w-6 h-6 ' src={fav} alt='' />Favorite</li>
              <li className='flex gap-2 p-3 md:gap-4 md:p-5 mx-1 md:mx-4  hover:bg-red-400 hover:border-none hover:rounded-lg transition duration-300 ease-out hover:translate-x-1 hover:ease-in text-xl font-semibold'><img className='w-6 h-6 ' src={bin} alt='' />Trash</li>
            </ul>
          </div>
        </aside>


        <main className='md:w-[80%] w-full'>
          <div className='inline-block m-3 text-4xl md:hidden dark:text-white '>
            <ion-icon name="chevron-forward-circle-outline" onClick={toggleMenu}></ion-icon>
          </div>
          <header>
            <div className='w-[95%] mx-auto p-6 mt-2 md:mt-10 bg-white  dark:bg-slate-900 dark:text-white rounded-lg'>
              <div className='mr-2 md:ml-5 hover:font-semibold '>
                <a href="/" className='flex gap-4 items-center text-lg '>
                  <img className='w-6 h-6' src={pen} alt="" />
                  write a note
                </a>
              </div>
            </div>
          </header>
          <section className='w-[95%] h-auto mx-auto bg-white dark:bg-slate-900 rounded-lg dark:text-white mt-10 transition duration-300 ease-in-out'>
            <div className='flex justify-between items-center px-6 py-4 text-2xl'>
              <p className=' dark:text-white'>Your Notes</p>
              {grid ? <ion-icon name="grid-outline" onClick={() => setgrid(!grid)}></ion-icon> : <ion-icon name="apps-outline" onClick={() => setgrid(!grid)}></ion-icon>}
            </div>
            {
              <Card grid={grid} />
            }
          </section>
        </main>
      </div>
    </>
  )
}

export default Home