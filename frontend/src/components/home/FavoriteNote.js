import React from 'react'
import { useGetNotesQuery } from '../../features/api/apiSlice';
import Card from './Card';
import { useState,useEffect } from 'react';

const FavoriteNote = () => {
    const { data } = useGetNotesQuery();
    const [grid, setgrid] = useState(true);
    const [Favorite, setFavorite] = useState([])
    console.log(data);

    useEffect(() => {
      const result = data!==undefined && data[0]?.Notes.filter((x)=> x.isFav === true);
       setFavorite(result);
       console.log(result)
    }, [data])
    
    const FavoriteCard = (item) => {
        if (item.isFav) {
            console.log(item)
            return <Card item={item} />
        }
        return

    }
    return (
        <div className=' w-full '>
            <div className='w-[95%]  h-auto mx-auto bg-white dark:bg-slate-900 rounded-lg dark:text-white mt-10'>
                <div className='flex justify-between items-center px-6 py-4 text-2xl'>
                    <p className=' dark:text-white'>Favorite Notes :-</p>
                    {grid ? <ion-icon name="grid-outline" onClick={() => setgrid(!grid)}></ion-icon> : <ion-icon name="apps-outline" onClick={() => setgrid(!grid)}></ion-icon>}
                </div>
                <div className='flex flex-wrap'>
                    {
                      Favorite !== undefined && Array.isArray(Favorite) && Favorite?.map((item) => FavoriteCard(item))
                    }
                </div>
            </div>
        </div>
    )
}

export default FavoriteNote