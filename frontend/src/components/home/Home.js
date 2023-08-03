import React, { useState, useEffect } from 'react';



import Card from './Card';
import Head from './Head';
import { useGetNotesQuery } from '../../features/api/apiSlice';



const Home = (props) => {
  const [grid, setgrid] = useState(true);
  const [Result, setResult] = useState([]);
  const { data } = useGetNotesQuery();
  useEffect(() => {
    const temp = data !== undefined && data[0].Notes.filter((x) => x.isArchive === false);
    setResult(temp)

  }, [data])

  return (
    <>
      <main className='md:w-[80%] w-full'>
        {/* <div className='inline-block m-3 text-4xl md:hidden dark:text-white '>
          <ion-icon name="chevron-forward-circle-outline" onClick={props.toggleMenu}></ion-icon>
        </div> */}

        <header>
          <Head />
        </header>

        <section className='w-[95%] h-auto mx-auto bg-white dark:bg-slate-900 rounded-lg dark:text-white mt-10 transition duration-300 ease-in-out'>
          <div className='flex justify-between items-center px-6 py-4 text-2xl'>
            <p className=' dark:text-white'>Your Notes</p>
            {grid ? <ion-icon name="grid-outline" onClick={() => setgrid(!grid)}></ion-icon> : <ion-icon name="apps-outline" onClick={() => setgrid(!grid)}></ion-icon>}
          </div>
          
          {
             grid ? (
              <div className='flex flex-wrap md:mx-1 mx-2.5'>
                {
                   Result !== undefined && Array.isArray(Result) && Result?.map((item) =>
                  <Card grid={grid} item={item} key={item._id} /> 
                   )
                }
              </div>
             ) : (
                
                Result !== undefined &&
                Array.isArray(Result) && (
                 
                  <table className='w-[95%] mx-auto table-fixed border-collapse my-2 border-2 animate-pop-up'>
                    <thead>
                      <tr className='bg-black text-white'>
                        <th className='text-left py-2 pl-2 rounded-tl-lg' colSpan={2}>
                          TITLE
                        </th>
                        <th className='py-2'>CREATED AT</th>
                        <th className='py-2 rounded-tr-lg'>ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody className=''>
                      {Result.map((item) => (
                        <Card key={item._id} grid={grid} item={item} />
                      ))}
                    </tbody>
                  </table>
                  
                 
                )
                      
                      
             )
         }
            {/* {Result !== undefined &&
              Array.isArray(Result) && (
                <table className='w-[95%] mx-auto table-fixed border-collapse my-2 border-2 animate-pop-up'>
                  <thead>
                    <tr className='bg-black text-white'>
                      <th className='text-left py-2 pl-2 rounded-tl-lg' colSpan={2}>
                        TITLE
                      </th>
                      <th className='py-2'>CREATED AT</th>
                      <th className='py-2 rounded-tr-lg'>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Result.map((item) => (
                      <Card key={item._id} grid={grid} item={item} />
                    ))}
                  </tbody>
                </table>
              )} */}
             

              {/* {

              Result !== undefined && Array.isArray(Result) && Result?.map((item) =>
                <Card grid={grid} item={item} key={item._id} />
              )
            } */}

        </section>
      </main>

    </>
  )
}

export default Home