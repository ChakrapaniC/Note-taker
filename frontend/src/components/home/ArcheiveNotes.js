import { useGetNotesQuery } from '../../features/api/apiSlice';
import Card from './Card';
import { useState, useEffect } from 'react';
import { ScaleLoader } from 'react-spinners';

const ArcheiveNotes = () => {
    const { data ,isLoading} = useGetNotesQuery();
    const [grid, setgrid] = useState(true);
    const [result, setresult] = useState([]);

    useEffect(() => {
      const temp = data!==undefined && data[0]?.Notes.filter((x)=> x.isArchive === true);
        setresult(temp);
        console.log(temp);
    }, [data])
    
    const ArchiveCard = (item) =>{
       if(item.isArchive){
        return <Card item={item} key={item._id}/>
       } 
       return
    }

    if(isLoading){
       
            return <div className=' flex justify-center items-center'><ScaleLoader color="red" /></div>
    
    }
    return (
        <div className=' md:-[80%] w-full '>
            <div className='w-[95%]  h-auto mx-auto bg-white dark:bg-slate-900 rounded-lg dark:text-white mt-10'>
                <div className='flex justify-between items-center px-6 py-4 text-2xl'>
                    <p className=' dark:text-white'>Archeive Notes :-</p>
                    {grid ? <ion-icon name="grid-outline" onClick={() => setgrid(!grid)}></ion-icon> : <ion-icon name="apps-outline" onClick={() => setgrid(!grid)}></ion-icon>}
                </div>
                <div className='flex flex-wrap'>
                    {
                        result !== undefined && Array.isArray(result) && result?.map((item) => ArchiveCard(item))
                    }
                </div>
            </div>
        </div>
    )
}

export default ArcheiveNotes