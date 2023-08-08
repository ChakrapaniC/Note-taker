import React from 'react'
import note from '../../image/noteimg.jpg';
import logo from '../../image/bg34-1.png'
import Register from '../register/Register';
import { useDispatch, useSelector } from 'react-redux';
import { loginToggle } from '../../../features/createslice/userSlice';

const Login = () => {
    // const [isActive, setisActive] = useState(false);
    const isActive = useSelector((state)=> state.toggle.login);
    const dispatch = useDispatch();
    return (
        <div className='h-[100vh] w-full flex bg-cutom-white'>
            <div className='md:w-[50%] h-screen relative md:block hidden'><img src={logo} alt="loading" className=' mt-14 ml-14 bg-no-repeat bg-contain' />
               <div className='absolute top-[20%] left-8'>
                  <div className='text-2xl font-bold text-gradient'>
                     Welcome to Note <span>Manager</span>
                  </div>
               </div>
            </div>
            <div className='md:w-[50%] w-full min-h-screen relative bg-black flex justify-center items-center'>

                {
                    isActive ? (
                        <>
                            <div className='md:absolute md:top-[20%] md:left-[-13.7%] hidden md:block '>
                                <p className={`group px-5 py-2 text-xl mb-2 cursor-pointer  ${isActive ? 'bg-black  text-white dark:text-black dark:bg-white border-none rounded-tl-[20px] rounded-bl-[20px]' : 'text-black dark:text-white'
                                    } focus:outline-none focus:ring focus:bg-blue-500 focus:border-blue-500`}
                                    onClick={() => dispatch(loginToggle(true))}>login</p>
                                <p className={`group px-5 py-2 text-xl cursor-pointer  ${!isActive ? 'bg-black text-white  dark:text-black dark:bg-white border-none rounded-tl-[20px] rounded-bl-[20px]' : 'text-black dark:text-white'
                                    } focus:outline-none focus:ring focus:bg-blue-500 focus:border-blue-500`}
                                    onClick={() => dispatch(loginToggle(false))}>sign up</p>
                            </div>
                            <div className='w-full animate-pop-up '>
                                <div> <img src={note} alt="..loading" className='h-screen w-full bg-cover' /></div>
                                <div className='md:w-[450px] md:h-[400px] w-[350px] h-auto absolute md:top-[20%] md:left-[25%] top-[20%] left-5 border-2 border-opacity-50 border-black rounded-xl backdrop-blur-xl bg-transparent text-white flex flex-col  '>
                                    <p className='mt-2 mb-4 text-[30px] text-center font-semibold'>LogIn</p>
                                    <div className=' w-[85%] mx-auto'>
                                        <p className='mb-2 text-xl'>Email Address</p>
                                        <input type="email" placeholder='enter your email..' className='w-full rounded-xl h-[40px] outline-none text-black font-semibold px-2' />
                                    </div>
                                    <div className='text-xl w-[85%] mx-auto mt-4'>
                                        <p className='mb-2'>Password</p>
                                        <input type="password" placeholder='enter your passsword' className='w-full rounded-xl h-[40px] outline-none text-black font-semibold px-2 text-sm' />
                                    </div>
                                    <div className='w-[85%] mx-auto px-4 py-2 mt-6 rounded-lg text-center text-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:border-2 hover:border-red-600 hover:rounded-xl'>
                                        <button>Login</button>
                                    </div>
                                    <div className='w-[85%] mx-auto px-4 py-2 mt-6 mb-6 rounded-lg text-center text-xl bg-gradient-to-r from-cyan-500 to-blue-500  '>
                                        <button>Dont Have Account?&nbsp;<span className='text-black hover:text-orange-400' onClick={() => dispatch(loginToggle(false))}>Signup</span></button>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                       <Register/>
                    )
                }

            </div>
        </div>
    )
}

export default Login