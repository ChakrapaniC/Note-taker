import React from 'react'
import NotesData from '../HOC/NotesData';
import Card from '../home/Card';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gridToggle } from "../../features/createslice/userSlice";
import Sidebar from "../home/Sidebar";

const DeleteNote = (props) => {
    const { data } = props;
    const [Trash, setTrash] = useState([]);

    const grid = useSelector((state) => state.toggle.grid);
    const sidebarOpen = useSelector((state) => state.toggle.sidebar);
    const dispatch = useDispatch();

    console.log(grid);
    useEffect(() => {
        const result = data !== undefined && data?.Notes.filter((x) => x.isTrash === true);
        setTrash(result);
    }, [data]);

    const TrashCard = (item) => {
        if (item.isTrash) {
            if (grid === true) {
                return <Card item={item} key={item._id} />;
            } else {
                return (
                    <table className="w-[95%] mx-auto table-fixed border-collapse my-2 border-2 animate-pop-up">
                        <thead>
                            <tr className="bg-black text-white">
                                <th className="text-left py-2 pl-2 rounded-tl-lg" colSpan={2}>
                                    TITLE
                                </th>
                                <th className="py-2">CREATED</th>
                                <th className="py-2 rounded-tr-lg">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            <Card key={item._id} grid={grid} item={item} />
                        </tbody>
                    </table>
                );
            }
        }
        return;
    };
    return (
        <div className="w-full flex min-h-screen md:h-auto ">
            <div
                className={`  md:w-[20%] ${sidebarOpen
                    ? "w-[60%] z-[50]  animate-slide-in"
                    : "w-0 z-0 overflow-hidden animate-slide-out delay-300"
                    } md:animate-none md:z-0 md:block fixed z-[50] top-0 left-0 md:static  md:shadow-none shadow-md  `}
            >
                <Sidebar />
            </div>
            {
              Trash !== undefined && Trash?.length !==0 ?
                <div className="md:w-[80%] w-full">
                    <div className="w-[95%]  h-auto mx-auto bg-white dark:bg-slate-900 rounded-lg dark:text-white mt-10 border-2">
                        <div className=" flex justify-between items-center px-6 py-4 text-2xl">
                            <p className=" dark:text-white">Trash Notes :-</p>
                            {grid ? (
                                <ion-icon
                                    name="grid-outline"
                                    onClick={() => {
                                        dispatch(gridToggle());
                                    }}
                                ></ion-icon>
                            ) : (
                                <ion-icon
                                    name="apps-outline"
                                    onClick={() => {
                                        dispatch(gridToggle());
                                    }}
                                ></ion-icon>
                            )}
                        </div>
                        <div className="flex flex-wrap mx-2.5">
                            {Trash !== undefined &&
                                Array.isArray(Trash) &&
                                Trash?.map((item) => TrashCard(item))}
                        </div>
                    </div>
                </div> : <div className=" md:w-[80%] "><div className="w-[95%] flex items-center justify-center text-2xl font-semibold h-[250px] mx-auto bg-white dark:bg-slate-900 rounded-lg dark:text-white mt-10 border-2">Trash Component is Empty :-)</div></div>
            }
        </div>
    )
}

export default NotesData(DeleteNote)