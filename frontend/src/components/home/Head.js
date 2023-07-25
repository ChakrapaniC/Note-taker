import React from 'react';
import pen from '../image/edit.png';
import { useState } from 'react';

const Head = () => {
    const [Note, setNote] = useState(false);
    return (
        <>
            <div className='w-[95%] mx-auto p-6 mt-2 md:mt-10 bg-white  dark:bg-slate-900 dark:text-white rounded-lg relative'>

                <div className={`mr-2 md:ml-5 hover:font-semibold ${Note ? 'h-[220px] animate-slide-down' : 'h-[30px] overflow-hidden animate-slide-up' } `} >
                    <button href="/" className='flex gap-4 items-center text-lg ' onClick={() => setNote(!Note)}>
                        <img className='w-6 h-6' src={pen} alt="" />
                        write a note
                    </button>

                    <div className='my-5 w-[80%]' >
                        <input className='w-[100%] py-2 outline-none text-xl font-semibold' type="text" placeholder='Title' />
                    </div>
                    <div className=' my-5 w-[80%]'>
                        <input className='w-[100%] py-2 outline-none text-xl font-semibold' type="text" placeholder='make a note..' />
                    </div>
                    <div className='flex items-center gap-4   justify-end '>
                        <button className='border-2 border-black hover:bg-black hover:text-white py-2 px-3 rounded-md'>Add</button>
                        <button className='border-1 py-2 px-3 rounded-md bg-slate-800 text-white hover:bg-black' onClick={()=> setNote(false)}>Close</button>
                    </div>
                </div>

            </div>


            {/* <div className={`w-[50%] hidden mx-auto my-4 h-[250px] bg-white rounded-lg p-4 relative `}>
                <div className='my-5 w-[80%] mx-auto' >
                    <input className='w-[100%] py-2 outline-none text-xl font-semibold' type="text" placeholder='Title' />
                </div>
                <div className=' my-5 w-[80%] mx-auto'>
                    <input className='w-[100%] py-2 outline-none text-xl font-semibold' type="text" placeholder='take a note..' />
                </div>
                <div className='flex items-center gap-4 absolute bottom-2 right-2 '>
                    <button className='border-2 border-black hover:bg-black hover:text-white py-2 px-3 rounded-md'>Add</button>
                    <button className='border-1 py-2 px-3 rounded-md bg-slate-800 text-white hover:bg-black'>Close</button>
                </div>
            </div>
            */}
        </>
    )
}

export default Head