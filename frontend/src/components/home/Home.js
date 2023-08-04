import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import Head from "./Head";
import { useGetNotesQuery } from "../../features/api/apiSlice";
import { gridToggle } from "../../features/createslice/userSlice";
import Sidebar from "./Sidebar";

const Home = (props) => {
  const [Result, setResult] = useState([]);
  const { data } = useGetNotesQuery();
  const grid = useSelector((state) => state.toggle.grid);
  const dispatch = useDispatch();
  const sidebarOpen = useSelector((state) => state.toggle.sidebar);
  console.log(grid);
  useEffect(() => {
    const temp =
      data !== undefined && data[0].Notes.filter((x) => x.isArchive === false);
    setResult(temp);
  }, [data]);

  return (
    <>
      <div className="w-full flex">
        <div className={`  md:w-[20%] ${sidebarOpen ? 'w-[60%] z-[50]  animate-slide-in' : 'w-0 z-0 overflow-hidden animate-slide-out delay-300'} md:animate-none md:z-0 md:block fixed z-[50] top-0 left-0 md:static  md:shadow-none shadow-md  `}>
          <Sidebar />
        </div>

        <main className="md:w-[80%] w-full">



          <header>
            <Head />
          </header>

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
                <table className="w-[95%] mx-auto table-fixed border-collapse my-2 border-2 animate-pop-up">
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
              )
            )}
          </section>

        </main>
      </div>
    </>
  );
};

export default Home;
