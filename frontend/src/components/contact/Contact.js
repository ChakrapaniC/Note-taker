import React from 'react'
import Sidebar from '../Sidebar/Sidebar';
import { useSelector } from 'react-redux';
import NotesData from '../HOC/NotesData';
import avatar from '../image/avatar.png'

const Contact = () => {
    const sidebarOpen = useSelector((state) => state.toggle.sidebar);
    return (
        <>
            <div className='flex w-full h-auto'>
                <div className={`  md:w-[20%] ${sidebarOpen ? "w-[60%] z-[50]  animate-slide-in" : "w-0 z-0 overflow-hidden animate-slide-out delay-300"} md:animate-none md:z-0 md:block fixed z-[50] top-0 left-0 md:static  md:shadow-none shadow-md  `}>
                    <Sidebar />
                </div>
                <div className='md:w-[80%] w-full '>
                    <div className="w-[95%] h-screen  lg:h-[600px] mx-auto md:bg-white dark:md:bg-slate-900  dark:text-white mt-10 rounded-xl border-none relative  ">
                        <div className='w-full h-[50%] hidden md:block bg-gradient-to-r from-red-500 to-fuchsia-500 rounded-t-lg'>

                        </div>
                        <div className='flex justify-center '>
                            <div className='w-full md:w-[450px] h-[450px] rounded-xl bg-gradient-to-r from-orange-100 to-pink-200 mx-auto dark absolute md:top-[20%] top-[15%] flex flex-col shadow-xl items-center dark:text-black'>
                                <div className='bg-gradient-to-r from-green-200 to-fuchsia-300 rounded-xl h-[40%] w-full'></div>
                                <div className='bg-transparent backdrop-blur-2xl p-5  rounded-[50%] border-[1px] border-black absolute top-10 shadow-2xl'>
                                    <img src={avatar} alt="avatar" className='w-[180px] h-[170px]' />
                                </div>
                                <div className='text-xl font-bold mt-[90px]'><p>Chakrapani Chaturvedi</p> </div>
                                <div className='text-xl font-bold'><p>BTECH CSE</p></div>
                                <div className="flex justify-evenly w-full mt-6 ">
                                    <a href="https://www.linkedin.com/in/chakrapani-chaturvedi-b8bb54227/" target="blank">
                                        <img className='h-10 w-10' src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedIn" />
                                    </a>
                                    <a href="mailto:dukesharma71@gmail.com" target="blank">

                                        <img className='h-10 w-10' src='https://cdn-icons-png.flaticon.com/128/5968/5968534.png' alt="linkedIn" />
                                    </a>

                                    <a href="https://github.com/ChakrapaniC" target="blank">
                                        <img src="https://cdn-icons-png.flaticon.com/512/1051/1051326.png" alt="Github" className='h-10 w-10' />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotesData(Contact);