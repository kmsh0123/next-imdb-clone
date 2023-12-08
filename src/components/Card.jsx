import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

import cookie from '../../public/cookie.jpg'

const Card = () => {
  return (
  <div className='grid grid-cols-4 max-w-6xl mx-auto'>
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
        <Image src={cookie}/>
    </div>    
  </div>
    
  )
}

export default Card