import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import Head from "./Head";
import { gridToggle } from "../../features/createslice/userSlice";
import Sidebar from "../Sidebar/Sidebar";
import NotesData from "../HOC/NotesData";

const Home = (props) => {
  const { data } = props;
  const [Result, setResult] = useState([]);
  const grid = useSelector((state) => state.toggle.grid);
  const dispatch = useDispatch();
  const sidebarOpen = useSelector((state) => state.toggle.sidebar);

  // const userid = useSelector((state)=> state.toggle.userid);
  // const { data } = useGetNotesQuery(userid);


  useEffect(() => {
    const temp = data !== undefined && data?.Notes.filter((x) => x.isArchive === false && x.isTrash === false);
    setResult(temp);
  }, [data]);

  return (
    <>
      <div className="w-full flex ">
        <div className={`  md:w-[20%] ${sidebarOpen ? 'w-[60%] z-[50]  animate-slide-in' : 'w-0 z-0 overflow-hidden animate-slide-out delay-300'} md:animate-none md:z-0 md:block fixed z-[50] top-0 left-0 md:static  md:shadow-none shadow-md  `}>
          <Sidebar />
        </div>

        <main className="md:w-[80%] w-full min-h-screen md:h-auto">



          <header>
            <Head />
          </header>
          {
            Result !== undefined && Result?.length !== 0 ?
              <section className="w-[95%] h-auto mx-auto bg-white dark:bg-slate-900 rounded-lg dark:text-white mt-10 transition duration-300 ease-in-out">
                <div className="flex justify-between items-center px-6 py-4 text-2xl">
                  <p className=" dark:text-white">Your Notes</p>
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

                {grid ? (
                  <div className="flex flex-wrap md:mx-1 mx-2.5">
                    {Result !== undefined &&
                      Array.isArray(Result) &&
                      Result?.map((item) => (
                        <Card grid={grid} item={item} key={item._id} />
                      ))}
                  </div>
                ) : (
                  Result !== undefined &&
                  Array.isArray(Result) && (
                    <div className="overflow-x-auto">
                      <table className="md:w-[95%] w-[500px] mx-auto table-fixed border-collapse my-2 border-2 animate-pop-up">
                        <thead>
                          <tr className="bg-black text-white">
                            <th
                              className="text-left py-2 pl-2 rounded-tl-lg"
                              colSpan={2}
                            >
                              TITLE
                            </th>
                            <th className="py-2">CREATED</th>
                            <th className="py-2 rounded-tr-lg">ACTIONS</th>
                          </tr>
                        </thead>
                        <tbody className="">
                          {Result.map((item) => (
                            <Card key={item._id} grid={grid} item={item} />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )
                )}
              </section> : <div className="w-[95%]  flex items-center justify-center  text-2xl font-semibold md:h-[250px] h-[150px] p-4  mx-auto bg-white dark:bg-slate-900 rounded-lg dark:text-white mt-10 border-2 ">Please Add And Manage Your Daily Tasks And Workflow In A Better Way  :-)</div>
          }
        </main>
      </div>
    </>
  );
};

export default NotesData(Home);
