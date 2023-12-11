import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

import cookie from '../../public/cookie.jpg'

const Card = ({mv}) => {
  console.log(mv.poster_path);
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
        <Image src = {`https://image.tmdb.org/t/p/w500/${mv.poster_path}`} alt={mv.title} 
        width={500}
        height={300}
        className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200 mx-auto w-1/2"
        placeholder="blur"
        blurDataURL="/spinner.svg"
        />
        <h1 className='my-5 font-semibold'>{mv.title}</h1>
        <p className='truncate'>{mv.overview}</p>
    </div>        
  )
}

export default Card