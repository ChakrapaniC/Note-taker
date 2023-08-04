import React from "react";
import { useGetNotesQuery } from "../../features/api/apiSlice";
import Card from "./Card";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gridToggle } from "../../features/createslice/userSlice";
import Sidebar from "./Sidebar";

const FavoriteNote = () => {
    const { data } = useGetNotesQuery();
    const [Favorite, setFavorite] = useState([]);
    console.log(data);

    const grid = useSelector((state) => state.toggle.grid);
    const sidebarOpen = useSelector((state) => state.toggle.sidebar);
    const dispatch = useDispatch();
    console.log(grid);
    useEffect(() => {
        const result =
            data !== undefined && data[0]?.Notes.filter((x) => x.isFav === true);
        setFavorite(result);
        console.log(result);
    }, [data, grid]);

    const FavoriteCard = (item) => {
        if (item.isFav) {
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
        <div className="w-full flex ">
            <div
                className={`  md:w-[20%] ${sidebarOpen
                        ? "w-[60%] z-[50]  animate-slide-in"
                        : "w-0 z-0 overflow-hidden animate-slide-out delay-300"
                    } md:animate-none md:z-0 md:block fixed z-[50] top-0 left-0 md:static  md:shadow-none shadow-md  `}
            >
                <Sidebar />
            </div>
            <div className="md:w-[80%] w-full">
                <div className="w-[95%]  h-auto mx-auto bg-white dark:bg-slate-900 rounded-lg dark:text-white mt-10 border-2">
                    <div className=" flex justify-between items-center px-6 py-4 text-2xl">
                        <p className=" dark:text-white">Favorite Notes :-</p>
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
                    <div className="flex flex-wrap">
                        {Favorite !== undefined &&
                            Array.isArray(Favorite) &&
                            Favorite?.map((item) => FavoriteCard(item))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FavoriteNote;
