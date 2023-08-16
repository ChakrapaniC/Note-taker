import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import { useState, useEffect } from "react";
import { ScaleLoader } from "react-spinners";
import { gridToggle } from "../../features/createslice/userSlice";
import Sidebar from "../Sidebar/Sidebar";
import NotesData from "../HOC/NotesData";
import { useNavigate } from "react-router-dom";

const ArcheiveNotes = (props) => {
    const { data, isLoading } = props;
    const [result, setresult] = useState([]);

    const grid = useSelector((state) => state.toggle.grid);
    const sidebarOpen = useSelector((state) => state.toggle.sidebar);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const userid = useSelector((state)=> state.toggle.userid)
    // const { data,isLoading } = useGetNotesQuery(userid);

    useEffect(() => {
        const temp =
            data !== undefined && data?.Notes.filter((x) => x.isArchive === true && x.isTrash === false);
        setresult(temp);
        console.log(temp);
    }, [data]);

    const ArchiveCard = (item) => {
        if (item.isArchive) {
            if (grid === true) {
                return <Card item={item} key={item._id} />;
            } else {
                return (
                    <div className="overflow-x-auto">
                        <table className="md:w-[95%] w-[500px] mx-auto table-fixed border-collapse my-2 border-2 animate-pop-up">
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
                    </div>
                );
            }
        }
        return;
    };

    if (isLoading) {
        return (
            <div className=" flex justify-center items-center h-[100px]">
                <ScaleLoader color="red" />
            </div>
        );
    }
    return (
        <div className="w-full flex min-h-screen md:h-auto">
            <div
                className={`  ${result.length !== 0 ? 'lg:w-[25%] md:w-[45%]' : 'lg:w-[20%] md:w-[40%]'} ${sidebarOpen
                    ? "w-[60%] z-[50]  animate-slide-in"
                    : "w-0 z-0 overflow-hidden animate-slide-out delay-300"
                    } md:animate-none md:z-0 md:block fixed z-[50] top-0 left-0 md:static  md:shadow-none shadow-md  `}
            >
                <Sidebar />
            </div>
            {
                result !== undefined && result?.length !== 0 ?
                    <div className=" lg:-[75%] md:-[65%] w-full ">
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
                            <div className="block md:hidden text-2xl mt-2 ml-4" onClick={() => { navigate('/home') }}><ion-icon name="arrow-back-circle-outline"></ion-icon></div>
                            <div className="flex flex-wrap ">
                                {result !== undefined &&
                                    Array.isArray(result) &&
                                    result?.map((item) => ArchiveCard(item))}
                            </div>
                        </div>
                    </div> : <div className=" md:w-[80%] w-full mx-auto"><div className="w-full md:w-[95%] p-2 flex items-center justify-center text-2xl font-semibold h-[250px] mx-auto bg-white dark:bg-slate-900 rounded-lg dark:text-white mt-10 border-2">Archive Component is Empty :-)</div></div>
            }
        </div>
    );
};

export default NotesData(ArcheiveNotes);
