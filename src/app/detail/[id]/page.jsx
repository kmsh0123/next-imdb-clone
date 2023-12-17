"use client"

import {useGetDetailsQuery} from '@/app/api/movieApi';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react'

const Detail = () => {
  const {id} = useParams();
  const {data} = useGetDetailsQuery({id}); 
 
  return (
    <div className='max-w-6xl mx-auto my-5 lg:flex'>
   <Image src = {`https://image.tmdb.org/t/p/w500/${data?.backdrop_path}`} alt = "Image not absence"
        width={300}
        height={300}
        className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200 sm:block pt-5 w-full md:w-[100%]"
          placeholder="blur"
          blurDataURL="/spinner.svg"
        />
       <div className='pt-5 space-y-5'>
       <h1 className='md:ml-10 md:mx-0 text-2xl font-semibold mx-5 lg:text-start text-center'>{data?.title}</h1>
        <p className='md:ml-10 md:mx-0 mx-5 lg:text-start text-center'>{data?.overview}</p>
        <div className='flex justify-between items-center my-5 md:ml-10 mx-5'>
          <p className='font-black text-violet-800'>Vote : {data?.vote_count}</p>
          <p className='font-extrabold text-violet-800'>Rating : {data?.vote_average.toFixed(1)}</p>
       </div>
       </div>
    </div>
  )
}

export default Detail