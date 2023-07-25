import React from 'react'

const Card = (props) => {
    const arr = ['card 1', 'card 2', 'card 3', 'card 4', 'card 5', 'card 6', ]
    return (
        <>
            {
                props.grid ?
                    <div className='flex flex-wrap justify-center items-center flex-col  md:flex-row md:justify-between p-5 animate-pop-up'>
                        {
                            arr.map(item => (
                                <div className='m-4 w-[250px] h-[250px] items-center border-yellow-400 border-2'>
                                    <p>{item}</p>
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