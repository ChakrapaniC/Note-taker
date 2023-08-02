import { useGetNotesQuery } from '../../features/api/apiSlice';
import Card from './Card';
import { useState } from 'react';

const ArcheiveNotes = () => {
    const { data } = useGetNotesQuery();
    const [grid, setgrid] = useState(true);
    console.log(data);
    const FavoriteCard = (item) => {
        if (item.archeive) {
            console.log(item)
            return <Card item={item} />
        }
        return

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
                        data !== undefined && data[0].Notes?.map((item) => FavoriteCard(item))
                    }
                </div>
            </div>
        </div>
    )
}

export default ArcheiveNotes