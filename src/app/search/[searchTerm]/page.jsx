"use client"
import { useGetSearchQuery } from '@/app/api/movieApi'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const search = ({params}) => {
    const {data : movies} = useGetSearchQuery(params.searchTerm);
    console.log(movies?.results);
  return (
    <div className='sm:grid sm:grid-cols-1 md:gird md:grid-cols-4 p-5 max-w-6xl mx-auto'>
      {
        movies?.results?.map(mv=>(
          <Link key={mv.id} href={`/detail/${mv.id}`} rel="preload">
          <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
          <Image src = {`https://image.tmdb.org/t/p/w500/${mv.poster_path}`} alt={mv.title} 
                width={500}
                height={300}
                className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  placeholder="blur"
                  blurDataURL="/spinner.svg"
        
                />
                <h1 className='my-5 font-semibold line-clamp-1'>{mv.title}</h1>
                <p className='mb-5 line-clamp-2'>{mv.overview}</p>
                <div className='flex justify-between items-center lg:my-0 my-5'>
                <p className='font-black'>{mv.release_date}</p>
                <p className='font-extrabold text-violet-800'>Rating : {mv.vote_average.toFixed(1)}</p>
         </div>
         </div>       
        </Link> 
        ))
      }
    </div>
  )
}

export default search