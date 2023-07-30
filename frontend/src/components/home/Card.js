import React from 'react';
import { useDeleteNoteMutation, useGetNotesQuery } from '../../features/api/apiSlice';
import moment from 'moment';
import { RiDeleteBin6Line} from "react-icons/ri";
const Card = (props) => {
   
    const arr = ['card 1', 'card 2', 'card 3', 'card 4', 'card 5', 'card 6',];

    const { data } = useGetNotesQuery();
   
    if(data){
        console.log(data[0].Notes)
    }
    const [deleteItem] = useDeleteNoteMutation();

   const deleteNote = (noteid) =>{
    console.log(noteid)
     deleteItem({"_id":"1", "params":noteid});
   }



    return (
        <>
            {
                props.grid ?
                    <div className='flex flex-wrap justify-center items-center flex-col  md:flex-row md:justify-normal  animate-pop-up'>
                        {
                            data!==undefined && data[0]?.Notes?.map(({_id,createdAt, title, description }) => (
                                <div className='my-6 md:m-4 w-[350px] h-[250px] relative items-center bg-custom-white border-none  rounded-xl shadow-lg hover:shadow-lg hover:shadow-orange-400'>
                                    <div className='border-b-2 px-3 h-[50px] flex items-center justify-between text-lg font-semibold'>
                                        <p>{title}</p>
                                         <RiDeleteBin6Line onClick={()=>{deleteNote(_id)}}/>
                                    </div>
                                    <div className='p-3 h-[150px]  text-justify'>
                                        <p>{description}</p>
                                    </div>
                                    <div className='absolute bottom-0 border-t-2 w-full h-[50px] flex items-center px-3'>
                                        <p>{moment(createdAt).format('YYYY-MM-DD')}</p>
                                    </div>
                                </div>
                            ))
                        }
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