import React from 'react';
import avatar from '../image/avatar.png'
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
    return (
        <>
          
            <div className={`md:w-[80%] w-[100%] h-screen md:h-[800px] md:mx-auto mt-10 shadow-md sticky bg-white dark:bg-slate-900 dark:text-white  rounded-lg border-none`}>
                {/* <div className=' hover:text-red-500 text-3xl inline-block absolute right-2 top-2 md:hidden ' onClick={props.toggleMenu}>
                    <ion-icon name="close-outline"></ion-icon>
                </div> */}
                <div className='flex items-center   g-3  py-8 px-4 text-xl border-b-2 '>
                    <img src={avatar} alt="avatr" className='w-[70px] h-[70px]  shadow-sm filter-drop' />
                    <p>peterParker</p>
                </div>

                <div className='border-b-2'>
                    {/* <p>Menu</p> */}
                    <ul className='flex flex-col mt-2 md:mx-0 mx-2'>
                        <li className='  hover:border-b-2 hover:border-red-500   transition duration-300 ease-out hover:translate-x-1 hover:ease-in text-2xl font-semibold  focus:border-none focus:radius-xl focus:bg-red-400'><Link to='/' className='flex gap-2 p-4 md:gap-4  md:p-5 mx-2 md:mx-4'><ion-icon name="home-outline"></ion-icon>Home</Link></li>
                        <li className='  hover:border-b-2 hover:border-red-500   transition duration-300 ease-out hover:translate-x-1 hover:ease-in text-2xl font-semibold'><Link to='/ArchiveNote' className='flex gap-2 p-4 md:gap-4  md:p-5 mx-2 md:mx-4'><ion-icon name="archive-outline"></ion-icon>Archive</Link></li>
                        <li className='  hover:border-b-2 hover:border-red-500   transition duration-300 ease-out hover:translate-x-1 hover:ease-in text-2xl font-semibold'><Link to='/favoriteNote' className='flex gap-2 p-4 md:gap-4  md:p-5 mx-2 md:mx-4'><ion-icon name="star-outline"></ion-icon>Favorite</Link></li>
                        <li className='flex gap-4 p-4 md:gap-4  md:p-5 mx-2 md:mx-4  hover:border-b-2 hover:border-red-500   transition duration-300 ease-out hover:translate-x-1 hover:ease-in text-2xl font-semibold'><ion-icon name="trash-outline"></ion-icon>Trash</li>
                    </ul>
                </div>
                <div className='my-4'>
                    <div className='flex gap-3 justify-center items-center  py-3 my-4 text-2xl border-none bg-blue-400 hover:bg-blue-500 rounded-lg mx-auto w-[180px] '>
                        <button className=''>Logout </button>
                        <ion-icon name="log-out-outline"  ></ion-icon>
                    </div>
                    <div className='flex gap-3 justify-center items-center  py-3 my-4 text-2xl border-none bg-red-300 hover:bg-red-400  rounded-lg mx-auto w-[180px] '>
                        <button>About</button>
                        <i class="fa-solid fa-circle-info"></i>
                    </div>
                    <div className='flex gap-3 justify-center items-center  py-3 mb-4 text-2xl border-none bg-green-300 hover:bg-green-400 rounded-lg mx-auto w-[180px]'>
                        <button>Contact</button>
                        <i class="fa-solid fa-user"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar