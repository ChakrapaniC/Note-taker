import React, { useState } from 'react';



import Card from './Card';
import Head from './Head';
import { useGetNotesQuery } from '../../features/api/apiSlice';



const Home = (props) => {
  const [grid, setgrid] = useState(true);
  const { data } = useGetNotesQuery();
  return (
    <>
      <main className='md:w-[80%] w-full'>
        <div className='inline-block m-3 text-4xl md:hidden dark:text-white '>
          <ion-icon name="chevron-forward-circle-outline" onClick={props.toggleMenu}></ion-icon>
        </div>

        <header>
          <Head />
        </header>

        <section className='w-[95%] h-auto mx-auto bg-white dark:bg-slate-900 rounded-lg dark:text-white mt-10 transition duration-300 ease-in-out'>
          <div className='flex justify-between items-center px-6 py-4 text-2xl'>
            <p className=' dark:text-white'>Your Notes</p>
            {grid ? <ion-icon name="grid-outline" onClick={() => setgrid(!grid)}></ion-icon> : <ion-icon name="apps-outline" onClick={() => setgrid(!grid)}></ion-icon>}
          </div>
          <div className='flex flex-wrap md:mx-1 mx-2.5'>

            {

              data !== undefined && data[0]?.Notes.map((item) =>
                <Card grid={grid} item={item} key={item._id} />
              )
            }
          </div>

        </section>
      </main>

    </>
  )
}

export default Home