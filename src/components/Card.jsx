import React from 'react'
import Image from 'next/image'
import Link from "next/link";

const Card = ({mv}) => {
  // console.log(mv);
  return (
   <Link href={`/detail/${mv.id}`} rel="preload">
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
           <p className='font-black'>{mv.release_date}</p>
    </div>       
   </Link> 
  )
}

export default Card