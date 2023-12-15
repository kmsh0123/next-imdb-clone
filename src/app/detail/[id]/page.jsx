"use client"

import {useGetDetailsQuery} from '@/app/api/movieApi';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react'

const Detail = () => {
  const {id} = useParams();
  const {data} = useGetDetailsQuery({id}); 
 
  return (
    <div className='max-w-6xl mx-auto my-5 md:flex'>
   <Image src = {`https://image.tmdb.org/t/p/w500/${data?.backdrop_path}`} alt = "Image not absence"
        width={300}
        height={300}
        className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200 sm:block md:p-0 p-5 w-full md:w-[30%]"
          placeholder="blur"
          blurDataURL="/spinner.svg"
        />
       <div className=''>
       <h1 className='md:ml-10 md:mx-0 text-2xl font-semibold mx-5 md:text-start text-center'>{data?.title}</h1>
        <p className='md:ml-10 md:mx-0 mx-5'>{data?.overview}</p>
       </div>
    </div>
  )
}

export default Detail