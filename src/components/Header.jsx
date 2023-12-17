"use client";

import Link from "next/link"
import { useState } from "react";
import DarkSwitch from "./DarkSwitch";


const Header = () => {
  
  return (
    <div className="bg-slate-900 p-5 text-white">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <ul className="">
            <Link href="/">Home</Link>
            <Link href="/about" className="ml-10">About</Link>
        </ul>
        <DarkSwitch/>
        
      </div>
    </div>
  )
}

export default Header