import React from 'react';
import { useState } from 'react';
import { useDeleteNoteMutation, useGetNotesQuery, useSetArcheiveMutation, useUpdateFavoriteMutation, useUpdateNoteMutation } from '../../features/api/apiSlice';
import moment from 'moment';
import { ScaleLoader } from 'react-spinners';
import { toast } from 'react-toastify';
// import {  useSelector } from 'react-redux';
const Card = (props) => {
    const { item, grid } = props
    const [EditCard, setEditCard] = useState(false);
    const [title, settitle] = useState('');
    const [description, setdescription] = useState('');
    const [NoteId, setNoteId] = useState();
    const { isLoading } = useGetNotesQuery();

    // const addNote = useSelector((state) => state.toggle);

    // if (addNote) {
    //     console.log(addNote)

    const [deleteItem] = useDeleteNoteMutation();
    const [updateItem] = useUpdateNoteMutation();
    const [updateFav] = useUpdateFavoriteMutation();
    const [updateArcheive] = useSetArcheiveMutation();

    const deleteNote = (id) => {
        deleteItem({ "_id": "1", "NoteId": id });
    }
    const updateNote = () => {
        updateItem({ _id: "1", title: title, description: description, id: NoteId });
        toast.success('Note Edited Success', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        settitle('');
        setdescription('');
        setEditCard(false);
    }

    const updateFavorite = (id) => {
        updateFav({ _id: "1", isFav: !item.isFav, id: id });
        toast.success('Favorite value Updated', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });

    }

    const UpdateArcheive = (id) => {
        updateArcheive({ _id: "1", isArchive: !item.isArchive, id: id }).then((data) => {
            toast.success(' Archeive Value Updated', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        });
    }
    if (isLoading) {
        return <div className=' flex justify-center items-center'><ScaleLoader color="red" /></div>
    }

    if (grid) {
        return (
            <div className={` ${item.archeive ? 'hideen' : 'block'} my-6 md:m-4 w-[350px] h-[250px] relative items-center bg-custom-white dark:bg-slate-800 border-none rounded-xl shadow-lg hover:shadow-lg hover:shadow-orange-400`}>

                <div className='border-b-2 px-3 h-[50px] flex items-center justify-between text-lg font-semibold'>
                    <p>{item.title}</p>
                    <div className='flex gap-3'>
                        <div className={`${item.isFav ? 'text-red-500' : ''}`} onClick={() => { updateFavorite(item._id); }}>
                            <i class="fa-solid fa-heart"  ></i>
                        </div>
                        <div className={`${item.isArchive ? 'text-green-400' : ''}`} onClick={() => { UpdateArcheive(item._id); }}>
                            <i class="fa-solid fa-box-archive"></i>
                        </div>
                    </div>


                </div>
                <div className='p-3 h-[150px]  text-justify'>
                    <p>{item.description}</p>
                </div>
                <div className='absolute bottom-0 border-t-2 w-full h-[50px] flex justify-between items-center px-3'>
                    <p>{moment(item.createdAt).format('YYYY-MM-DD')}</p>
                    <div className='flex gap-3'>
                        <button className='border-1 py-1 px-3 rounded-md bg-pink-400 text-white hover:bg-black' onClick={() => { setEditCard(!EditCard); settitle(item.title); setdescription(item.description); setNoteId(item._id) }} >Edit</button>
                        <button className='border-1 py-1 px-3 rounded-md bg-blue-400 text-white hover:bg-black' onClick={() => { deleteNote(item._id) }} >Delete</button>
                    </div>
                </div>

            </div>
        )
    }
    return (
        <>
            {/* {
                props.grid ?
                    <div className='flex justify-center items-center flex-col  md:flex-row md:justify-normal  animate-pop-up '>


                        <div className={` ${item.archeive ? 'hideen' : 'block'} my-6  md:m-4 w-[350px] h-[250px]  relative items-center bg-custom-white dark:bg-slate-800 border-none  rounded-xl shadow-lg hover:shadow-lg hover:shadow-orange-400`}>
                            <div className='border-b-2 px-3 h-[50px] flex items-center justify-between text-lg font-semibold'>
                                <p>{item.title}</p>
                                <div className='flex gap-3'>
                                    <div className={`${item.isFav ? 'text-red-500' : ''}`} onClick={() => { updateFavorite(item._id);  }}>
                                        <i class="fa-solid fa-heart"  ></i>
                                    </div>
                                    <div className={`${item.isArchive ? 'text-green-400' : ''}`} onClick={() => { UpdateArcheive(item._id); }}>
                                       <i class="fa-solid fa-box-archive"></i>
                                    </div>
                                </div>


                            </div>
                            <div className='p-3 h-[150px]  text-justify'>
                                <p>{item.description}</p>
                            </div>
                            <div className='absolute bottom-0 border-t-2 w-full h-[50px] flex justify-between items-center px-3'>
                                <p>{moment(item.createdAt).format('YYYY-MM-DD')}</p>
                                <div className='flex gap-3'>
                                    <button className='border-1 py-1 px-3 rounded-md bg-pink-400 text-white hover:bg-black' onClick={() => { setEditCard(!EditCard); settitle(item.title); setdescription(item.description); setNoteId(item._id) }} >Edit</button>
                                    <button className='border-1 py-1 px-3 rounded-md bg-blue-400 text-white hover:bg-black' onClick={() => { deleteNote(item._id) }} >Delete</button>
                                </div>
                            </div>
                        </div>



                        <div className={`flex flex-col w-[40%]  mx-auto bg-blue-200 dark:bg-slate-800 shadow-slate-400 ${EditCard ? 'block animate-slide-top overflow-hidden z-10' : 'hidden animate-slide-out delay-1000'} absolute top-24 left-[30%] shadow-xl rounded-sm `}>
                            <p className='text-2xl font-bold px-7 py-2'>Edit Box</p>
                            <div className='my-4 mx-auto w-[90%]' >
                                <label for="title" className='text-2xl text-semibold'>Title</label>
                                <input id='title' className='w-[100%] px-2 py-2  text-xl font-semibold rounded-md dark:text-black' type="text" value={title} onChange={(e) => { settitle(e.target.value) }} />
                            </div>
                            <div className=' mb-2  mx-auto w-[90%] '>
                                <label for="description" className='text-2xl text-semibold'>Description</label>
                                <textarea id='description' className='w-[100%] h-[150px] py-2 dark:text-black text-justify px-2 text-xl font-semibold rounded-md' type="text" value={description} onChange={(e) => { setdescription(e.target.value) }} />
                            </div>
                            <div className='flex items-center gap-3 px-4 mb-2 justify-end '>
                                <button className='border-2 border-black hover:bg-black hover:text-white py-2 px-3 rounded-md' onClick={updateNote}>Save</button>
                                <button className='border-1 py-2 px-3  rounded-md bg-slate-800 text-white hover:bg-black' onClick={() => { setEditCard(!EditCard) }}>Close</button>
                            </div>
                        </div>


                    </div> :

                    <table className='w-[95%] mx-auto table-fixed border-collapse my-2  border-2 animate-pop-up'>
                        <thead>
                            <tr className=' bg-black text-white'>
                                <th className=' text-left py-2 pl-2  rounded-tl-lg' colSpan={2}>TITLE</th>
                                <th className='py-2'>CREATED AT</th>
                                <th className='py-2 rounded-tr-lg'>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                           
                                <tr key={item._id} className='py-8 border-b-2 border-b-slate-300   '>
                                    <td className='py-4 pl-2' colSpan={2} rowSpan={2}><p className='text-xl font-semibold mb-2'>{item.title}</p>  <p className='text-lg'>{item.description}</p></td>
                                    <td className='py-4  text-center'>{moment(item.createdAt).format('YYYY-MM-DD')}</td>
                                    <td className='py-4 '>
                                        <div className='flex gap-2 justify-center'>
                                            <ion-icon name="create-outline"></ion-icon>
                                            <ion-icon name="trash-outline"></ion-icon>
                                        </div>
                                    </td>
                                </tr>
                        </tbody>
                    </table>


            } */}
          
      
      <tr key={item._id} className='py-8 border-b-2 border-b-slate-300  w-[100%] '>
                                    <td className='py-4 pl-2'colSpan={2} ><p className='text-xl font-semibold mb-2'>{item.title}</p>  <p className='text-lg'>{item.description}</p></td>
                                    <td className='py-4  text-center'>{moment(item.createdAt).format('YYYY-MM-DD')}</td>
                                    <td className='py-4 '>
                                        <div className='flex gap-3 justify-center'>
                                            <div  className='px-2 py-1 rounded-[20%] bg-green-300 text-xl'><ion-icon name="create-outline"></ion-icon></div>
                                            <div className='px-2 py-1 rounded-[20%] bg-pink-300 text-xl'> <ion-icon name="trash-outline"></ion-icon></div>
                                        </div>
                                    </td>
                                </tr>




        </>
    )
}

export default Card