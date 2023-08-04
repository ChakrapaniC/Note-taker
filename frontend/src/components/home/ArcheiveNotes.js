import { useDispatch, useSelector } from "react-redux";
import { useGetNotesQuery } from "../../features/api/apiSlice";
import Card from "./Card";
import { useState, useEffect } from "react";
import { ScaleLoader } from "react-spinners";
import { gridToggle } from "../../features/createslice/userSlice";
import Sidebar from "./Sidebar";

const ArcheiveNotes = () => {
    const { data, isLoading } = useGetNotesQuery();
    const [result, setresult] = useState([]);

    const grid = useSelector((state) => state.toggle.grid);
    const sidebarOpen = useSelector((state) => state.toggle.sidebar);
    const dispatch = useDispatch();

    useEffect(() => {
        const temp =
            data !== undefined && data[0]?.Notes.filter((x) => x.isArchive === true);
        setresult(temp);
        console.log(temp);
    }, [data]);

    const ArchiveCard = (item) => {
        if (item.isArchive) {
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

    if (isLoading) {
        return (
            <div className=" flex justify-center items-center">
                <ScaleLoader color="red" />
            </div>
        );
    }
    return (
        <div className="w-full flex">
            <div
                className={`  md:w-[20%] ${sidebarOpen
                    ? "w-[60%] z-[50]  animate-slide-in"
                    : "w-0 z-0 overflow-hidden animate-slide-out delay-300"
                    } md:animate-none md:z-0 md:block fixed z-[50] top-0 left-0 md:static  md:shadow-none shadow-md  `}
            >
                <Sidebar />
            </div>
            <div className=" md:-[80%] w-full ">
                <div className="w-[95%]  h-auto mx-auto bg-white dark:bg-slate-900 rounded-lg dark:text-white mt-10">
                    <div className="flex justify-between items-center px-6 py-4 text-2xl">
                        <p className=" dark:text-white">Archeive Notes :-</p>
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
                                onClick={() => dispatch(gridToggle())}
                            ></ion-icon>
                        )}
                    </div>
                    <div className="flex flex-wrap">
                        {result !== undefined &&
                            Array.isArray(result) &&
                            result?.map((item) => ArchiveCard(item))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArcheiveNotes;
