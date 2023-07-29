import React, { useState } from 'react';



import Card from './Card';
import Sidebar from './Sidebar';
import Head from './Head';



const Home = () => {

  const [isOpen, setisOpen] = useState(false);
  const [grid, setgrid] = useState(true);


  
  function toggleMenu() {
    setisOpen(!isOpen);
  }

  return (
    <>

      <div className='w-full flex'>
        <aside className={`  md:w-[20%] ${isOpen ? 'w-[60%] z-[50] animate-slide-in' : 'w-0 z-0 overflow-hidden animate-slide-out delay-300'} md:animate-none md:z-0 md:block fixed z-[50] top-0 left-0 md:static  md:shadow-none shadow-md  `} >
          <Sidebar toggleMenu={toggleMenu} />
        </aside>


        <main className='md:w-[80%] w-full'>
          <div className='inline-block m-3 text-4xl md:hidden dark:text-white '>
            <ion-icon name="chevron-forward-circle-outline" onClick={toggleMenu}></ion-icon>
          </div>

          <header>
            <Head />
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