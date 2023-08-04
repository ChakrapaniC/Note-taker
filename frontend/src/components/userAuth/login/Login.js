import React from 'react'
import note from '../../image/noteimg.jpg';
import { useState } from 'react';

const Login = () => {
    const [isActive, setisActive] = useState(false);
    return (
        <div className='h-screen w-full flex'>
            <div className='w-[70%]'><img src={note} alt="loading" className='min-h-screen  bg-no-repeat bg-contain' /> </div>
            <div className='w-[30%] relative'>
                <div className='absolute top-[20%] left-[-20%] bg-red'>
                    <p className={`group px-5 py-2 text-white rounded ${isActive ? 'bg-blue-500 border-blue-500' : 'bg-gray-400 border-gray-400'
                        } focus:outline-none focus:ring focus:bg-blue-500 focus:border-blue-500`}
                        onClick={() => setisActive(true)}>login</p>
                    <p className={`group px-5 py-2 text-white rounded ${!isActive ? 'bg-blue-500 border-blue-500' : 'bg-gray-400 border-gray-400'
                        } focus:outline-none focus:ring focus:bg-blue-500 focus:border-blue-500`}
                        onClick={() => setisActive(false)}>sign up</p>
                </div>
            </div>
        </div>
    )
}

export default Login