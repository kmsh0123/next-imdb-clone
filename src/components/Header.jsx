"use client";

import Link from "next/link"
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonSharp } from "react-icons/io5";
import { useState } from "react";


const Header = () => {
  const [open,setOpen] = useState(true);
  return (
    <div className="bg-slate-900 p-5 text-white ">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <ul className="">
            <Link href="/">Home</Link>
            <Link href="/about" className="ml-10">About</Link>
        </ul>
        <div className="flex items-center space-x-5 ">
          <div onClick={()=>setOpen(!open)}>
          {
            open ? <IoMoonSharp className="text-2xl"/> : <MdOutlineWbSunny className="text-2xl "/>
          }
          </div>
            <span className="font-bold bg-slate-300 px-5 py-2 rounded-full text-indigo-900 select-none">IMDB</span>
        </div>
      </div>
    </div>
  )
}

export default Header