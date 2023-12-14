"use client"

import {useGetDetailsQuery} from '@/app/api/movieApi';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react'

const Detail = () => {
  const {id} = useParams();
  const {data} = useGetDetailsQuery({id}); 
 
  return (
    <div className='max-w-6xl mx-auto my-5 flex'>
   <Image src = {`https://image.tmdb.org/t/p/w500/${data?.backdrop_path}`} alt = "Image not absence"
        width={300}
        height={300}
        className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          style={{
            width: "30%",
            height: "auto",
          }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
        />
       <div className=''>
       <h1 className='ml-10 text-2xl font-semibold'>{data?.title}</h1>
        <p className='ml-10'>{data?.overview}</p>
       </div>
    </div>
  )
}

export default Detail