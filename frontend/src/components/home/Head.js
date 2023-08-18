import React from 'react';
import { useState} from 'react';
import { useAddNoteMutation, } from '../../features/api/apiSlice';
import { toast } from 'react-toastify';
import {  useSelector } from 'react-redux';
// import { userIdState } from '../../features/createslice/userSlice';
import NotesData from '../HOC/NotesData';
import write from '../image/write-removebg-preview.png';
import {FiEdit } from "react-icons/fi";

const Head = () => {
    const [Note, setNote] = useState(false);
    const [Title, setTitle] = useState('');
    const [Description, setDescription] = useState('');
    // const [UserId, setUserId] = useState('');
    

    const [addNote] = useAddNoteMutation();
    // const [verifyToken] = useTokenVerifyMutation();
    // const [getUser] = useGetUserMutation();
    // const dispatch = useDispatch();
    const UserId = useSelector((state)=> state.toggle.userid);
    const AddNote = () =>{
       addNote({_id: UserId , title: Title, isFav:"false", isArchive:"false", isTrash:"false", description: Description});
       toast.success('Add Note Success', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
       setNote(false);
       setTitle('');
       setDescription('');
    };


    
    return (
        <>
            <div className='w-[95%] mx-auto p-6 mt-8 md:mt-10 bg-white  dark:bg-slate-900 dark:text-white rounded-lg relative'>
                     <div className='absolute right-4 top-0'>
                        <img src={write} alt="loading..."  className='w-[100px] h-[80px]'/>
                    </div>
                <div className={`mr-2 md:ml-5 hover:font-semibold ${Note ? 'h-[220px] animate-slide-down' : 'h-[30px] overflow-hidden animate-slide-up' } `} >
                  
                    <button href="/" className='flex gap-4 items-center text-xl ' onClick={() => setNote(!Note)}>
                       <FiEdit/>
                        write a note

                    </button>
                    
                
                    <div className='my-5 w-[80%]' >
                        <input className='w-[100%] py-2 outline-none text-xl font-semibold' type="text" value={Title} placeholder='Title' onChange={(e)=>{setTitle(e.target.value)}}/>
                    </div>
                    <div className=' my-5 w-[80%]'>
                        <input className='w-[100%] py-2 outline-none text-xl font-semibold' type="text" value={Description} placeholder='make a note..' onChange={(e)=>{setDescription(e.target.value)}} />
                    </div>
                    <div className='flex items-center gap-4   justify-end '>
                        <button className='border-2 border-black hover:bg-black hover:text-white py-2 px-3 rounded-md' onClick={AddNote}>Add</button>
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

export default NotesData(Head);