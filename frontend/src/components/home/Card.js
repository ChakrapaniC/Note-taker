import React from 'react';
import { useState } from 'react';
import { useDeleteNoteMutation, useGetNotesQuery, useSetArcheiveMutation, useUpdateFavoriteMutation, useUpdateNoteMutation } from '../../features/api/apiSlice';
import moment from 'moment';
import { ScaleLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
const Card = (props) => {
    const { item } = props
    const [EditCard, setEditCard] = useState(false);

    const [isFavorite, setisFavorite] = useState(false);
    const [isArcheive, setisArcheive] = useState(false);
    const [title, settitle] = useState('');
    const [description, setdescription] = useState('');
    const [NoteId, setNoteId] = useState();
    const { data, isLoading } = useGetNotesQuery();

    const arr = ['card1', 'card2'];
    const addNote = useSelector((state) => state.toggle);

    if (addNote) {
        console.log(addNote)
    }

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
        console.log(isFavorite)
        updateFav({ _id: "1", isFav: isFavorite, id: id });
    }

    const UpdateArcheive = (id) => {
       console.log(id)
        updateArcheive({ _id: "1", isArcheive: isArcheive, id: id }).then((data)=>{
            toast.success('Note Added In Archeive', {
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

    return (
        <>
            {
                true ?
                    <div className='flex justify-center items-center flex-col  md:flex-row md:justify-normal  animate-pop-up '>


                        <div className={` ${item.archeive ? 'hideen' : 'block'} my-6  md:m-4 w-[350px] h-[250px]  relative items-center bg-custom-white dark:bg-slate-800 border-none  rounded-xl shadow-lg hover:shadow-lg hover:shadow-orange-400`}>
                            <div className='border-b-2 px-3 h-[50px] flex items-center justify-between text-lg font-semibold'>
                                <p>{item.title}</p>
                                <div className='flex gap-2'>
                                    <div className={`${item.isFav ? 'text-red-500' : ''}`} onClick={() => { updateFavorite(item._id); setisFavorite(!isFavorite) }}>
                                        <i class="fa-solid fa-heart"  ></i>
                                    </div>
                                    <div className={`${item.isFav ? 'text-red-500' : ''}`} onClick={() => { UpdateArcheive(item._id); setisArcheive(!isArcheive) }}>
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
                            {arr.map((item, index) => (
                                <tr key={index} className='py-8 border-b-2 border-b-slate-300   '>
                                    <td className='py-4 pl-2' colSpan={2}>{item}</td>
                                    <td className='py-4  text-center'>22 july</td>
                                    <td className='py-4 '>
                                        <div className='flex gap-2 justify-center'>
                                            <ion-icon name="create-outline"></ion-icon>
                                            <ion-icon name="trash-outline"></ion-icon>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>


            }
            {/* <div className='flex flex-wrap justify-center items-center flex-col  md:flex-row md:justify-between p-5'>
          {
            arr.map(item => (
              <div className='m-4 w-[250px] h-[250px] items-center border-yellow-400 border-2'>
                  <p>{item}</p>
              </div>
            ))
          }
        </div> */}

            {/* <table className='w-[95%] mx-auto table-fixed border-collapse my-2'>
                <thead>
                    <tr className=' bg-black text-white'>
                        <th className=' text-left py-2 pl-2  rounded-tl-lg' colSpan={2}>TITLE</th>
                        <th className='py-2'>CREATED AT</th>
                        <th className='py-2 rounded-tr-lg'>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {arr.map((item, index) => (
                        <tr key={index} className='py-8 border-b-2 border-b-slate-300   '>
                            <td className='py-4 pl-2' colSpan={2}>{item}</td>
                            <td className='py-4  text-center'>22 july</td>
                            <td className='py-4 '>
                                <div className='flex gap-2 justify-center'>
                                    <ion-icon name="create-outline"></ion-icon>
                                    <ion-icon name="trash-outline"></ion-icon>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table> */}

        </>
    )
}

export default Card