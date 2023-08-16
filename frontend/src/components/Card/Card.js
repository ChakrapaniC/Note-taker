import React from "react";
import { useState } from "react";
import {
    useDeleteNoteMutation,
    useSetArcheiveMutation,
    useUpdateFavoriteMutation,
    useUpdateNoteMutation,
    useUpdateTrashMutation,
} from "../../features/api/apiSlice";
import moment from "moment";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
// import {  useSelector } from 'react-redux';
const Card = (props) => {
    const { item } = props;
    const [EditCard, setEditCard] = useState(false);
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    const [NoteId, setNoteId] = useState();

    // const addNote = useSelector((state) => state.toggle);

    // if (addNote) {
    //     console.log(addNote)
    const grid = useSelector((state) => state.toggle.grid);
    const userid = useSelector((state) => state.toggle.userid);

    console.log(grid);
    const [changeTrash] = useUpdateTrashMutation();
    const [deleteNote] = useDeleteNoteMutation();
    const [updateItem] = useUpdateNoteMutation();
    const [updateFav] = useUpdateFavoriteMutation();
    const [updateArcheive] = useSetArcheiveMutation();

    const updateTrash = (id) => {
        changeTrash({ _id: userid, isTrash: !item.isTrash, id: id });
        toast.success("Trash Update Successfully", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    };
    const DeleteNote = (id) => {
        deleteNote({ id: userid, Noteid: id });
        toast.success("Note Deleted Successfully", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    };
    const updateNote = () => {
        updateItem({
            _id: userid,
            title: title,
            description: description,
            id: NoteId,
        });
        toast.success("Note Edited Success", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        settitle("");
        setdescription("");
        setEditCard(false);
    };

    const updateFavorite = (id) => {
        updateFav({ _id: userid, isFav: !item.isFav, id: id });
        toast.success("Favorite value Updated", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    };

    const UpdateArcheive = (id) => {
        updateArcheive({ _id: userid, isArchive: !item.isArchive, id: id }).then(
            (data) => {
                toast.success(" Archeive Value Updated", {
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
        );
    };
    // if (isLoading) {
    //     return <div className=' flex justify-center items-center h-[50px]'><ScaleLoader color="red" /></div>
    // }

    return (
        <>
            {grid ? (
                <div className="flex justify-center items-center flex-col mx-auto md:mx-0 md:flex-row md:justify-normal  animate-pop-up ">
                    <div
                        className={` ${item.archeive ? "hideen" : "block"
                            } mx-auto my-6 md:mx-[110px] lg:m-4 w-[350px] h-[250px]  relative items-center bg-custom-white dark:bg-slate-800 border-none  rounded-xl shadow-lg hover:shadow-lg hover:shadow-orange-400`}
                    >
                        <div className="border-b-2 px-3 h-[50px] flex items-center justify-between text-lg font-semibold">
                            <p>{item.title}</p>
                            <div className="flex gap-3">
                                <div
                                    className={`${item.isFav ? "text-red-500" : ""}`}
                                    onClick={() => {
                                        updateFavorite(item._id);
                                    }}
                                >
                                    <i class="fa-solid fa-heart"></i>
                                </div>
                                <div
                                    className={`${item.isArchive ? "text-green-400" : ""}`}
                                    onClick={() => {
                                        UpdateArcheive(item._id);
                                    }}
                                >
                                    <i class="fa-solid fa-box-archive"></i>
                                </div>
                            </div>
                        </div>
                        <div className="p-3 h-[150px]  text-justify">
                            <p>{item.description}</p>
                        </div>
                        <div className="absolute bottom-0 border-t-2 w-full h-[50px] flex justify-between items-center px-3">
                            <p>{moment(item.createdAt).format("YYYY-MM-DD")}</p>
                            <div className={`${item.isTrash ? "hidden" : "flex"} gap-3`}>
                                <button
                                    className="border-1 py-1 px-3 rounded-md bg-pink-400 text-white hover:bg-black"
                                    onClick={() => {
                                        setEditCard(!EditCard);
                                        settitle(item.title);
                                        setdescription(item.description);
                                        setNoteId(item._id);
                                        window.scrollTo(0, 0);
                                    }}
                                >
                                    Edit
                                </button>
                                <button
                                    className="border-1 py-1 px-3 rounded-md bg-blue-400 text-white hover:bg-black"
                                    onClick={() => {
                                        updateTrash(item._id);
                                    }}
                                >
                                    Delete
                                </button>
                            </div>
                            <div className={`${item.isTrash ? "flex" : "hidden"} gap-3`}>
                                <button
                                    className="border-1 py-1 px-3 rounded-md bg-pink-400 text-white hover:bg-black"
                                    onClick={() => {
                                        updateTrash(item._id);
                                    }}
                                >
                                    Undo
                                </button>
                                <button
                                    className="border-1 py-1 px-3 rounded-md bg-blue-400 text-white hover:bg-black"
                                    onClick={() => {
                                        DeleteNote(item._id);
                                    }}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`flex flex-col w-[90%] md:w-[40%] mx-auto bg-blue-200 dark:bg-slate-700  shadow-slate-400 ${EditCard
                                ? "block animate-slide-top overflow-hidden z-10"
                                : "hidden animate-slide-out delay-1000"
                            } absolute top-24 left-[5%] md:left-[30%] shadow-sm rounded-lg `}
                    >
                        <p className="text-2xl font-bold px-7 py-2">Edit Box</p>
                        <div className="my-4 mx-auto w-[90%]">
                            <label htmlForfor="title" className="text-2xl text-semibold">
                                Title
                            </label>
                            <input
                                id="title"
                                className="w-[100%] px-2 py-2  text-xl font-semibold rounded-md dark:text-black"
                                type="text"
                                value={title}
                                onChange={(e) => {
                                    settitle(e.target.value);
                                }}
                            />
                        </div>
                        <div className=" mb-2  mx-auto w-[90%] ">
                            <label
                                htmlForfor="description"
                                className="text-2xl text-semibold"
                            >
                                Description
                            </label>
                            <textarea
                                id="description"
                                className="w-[100%] h-[150px] py-2 dark:text-black text-justify px-2 text-xl font-semibold rounded-md"
                                type="text"
                                value={description}
                                onChange={(e) => {
                                    setdescription(e.target.value);
                                }}
                            />
                        </div>
                        <div className="flex items-center gap-3 px-4 mb-2 justify-end ">
                            <button
                                className="border-2 border-black hover:bg-black hover:text-white py-2 px-3 rounded-md"
                                onClick={updateNote}
                            >
                                Save
                            </button>
                            <button
                                className="border-1 py-2 px-3  rounded-md bg-slate-800 text-white hover:bg-black"
                                onClick={() => {
                                    setEditCard(!EditCard);
                                }}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div
                        className={`flex flex-col w-[90%] md:w-[40%]  mx-auto bg-blue-200 dark:bg-slate-800 shadow-slate-400 ${EditCard
                                ? "block animate-slide-top overflow-hidden z-10"
                                : "hidden animate-slide-out delay-1000"
                            } absolute top-24 md:left-[30%] left-[5%] shadow-xl rounded-sm `}
                    >
                        <p className="text-2xl font-bold px-7 py-2">Edit Box</p>
                        <div className="my-4 mx-auto w-[90%]">
                            <label for="title" className="text-2xl text-semibold">
                                Title
                            </label>
                            <input
                                id="title"
                                className="w-[100%] px-2 py-2  text-xl font-semibold rounded-md dark:text-black"
                                type="text"
                                value={title}
                                onChange={(e) => {
                                    settitle(e.target.value);
                                }}
                            />
                        </div>
                        <div className=" mb-2  mx-auto w-[90%] ">
                            <label for="description" className="text-2xl text-semibold">
                                Description
                            </label>
                            <textarea
                                id="description"
                                className="w-[100%] h-[150px] py-2 dark:text-black text-justify px-2 text-xl font-semibold rounded-md"
                                type="text"
                                value={description}
                                onChange={(e) => {
                                    setdescription(e.target.value);
                                }}
                            />
                        </div>
                        <div className="flex items-center gap-3 px-4 mb-2 justify-end ">
                            <button
                                className="border-2 border-black hover:bg-black hover:text-white py-2 px-3 rounded-md"
                                onClick={updateNote}
                            >
                                Save
                            </button>
                            <button
                                className="border-1 py-2 px-3  rounded-md bg-slate-800 text-white hover:bg-black"
                                onClick={() => {
                                    setEditCard(!EditCard);
                                }}
                            >
                                Close
                            </button>
                        </div>
                    </div>

                    <tr
                        key={item._id}
                        className="py-8 border-b-2 border-b-slate-300  w-[100%] "
                    >
                        <td className="py-4 pl-2 " colSpan={2}>
                            <p className="text-xl font-semibold mb-2 ">{item.title}</p>{" "}
                            <p className="text-lg ]">{item.description}</p>
                        </td>
                        <td className="py-4  text-center">
                            {moment(item.createdAt).format("YYYY-MM-DD")}
                        </td>
                        <td className="py-4 ">
                            <div className="flex  justify-center">
                                <div className={`${item?.isTrash ? "hidden" : "flex"} gap-3  `}>
                                    <div
                                        className="px-2 py-1 rounded-[20%] bg-green-300 text-xl"
                                        onClick={() => {
                                            setEditCard(!EditCard);
                                            settitle(item.title);
                                            setdescription(item.description);
                                            setNoteId(item._id);
                                        }}
                                    >
                                        <ion-icon name="create-outline"></ion-icon>
                                    </div>
                                    <div
                                        className="px-2 py-1 rounded-[20%] bg-pink-300 text-xl"
                                        onClick={() => {
                                            updateTrash(item._id);
                                        }}
                                    >
                                        {" "}
                                        <ion-icon name="trash-outline"></ion-icon>
                                    </div>
                                </div>
                                <div
                                    className={`${item?.isTrash ? "flex " : "hidden"} gap-3  `}
                                >
                                    <div
                                        className="px-2 py-1 rounded-[20%] bg-green-300 text-xl"
                                        onClick={() => {
                                            updateTrash(item._id);
                                        }}
                                    >
                                        <ion-icon name="arrow-undo-sharp"></ion-icon>
                                    </div>
                                    <div
                                        className="px-2 py-1 rounded-[20%] bg-pink-300 text-xl"
                                        onClick={() => {
                                            DeleteNote(item._id);
                                        }}
                                    >
                                        {" "}
                                        <ion-icon name="trash-outline"></ion-icon>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                </>
            )}
        </>
    );
};

export default Card;
