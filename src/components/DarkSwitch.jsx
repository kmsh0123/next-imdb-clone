"use client"

import React, { useEffect, useState } from 'react'
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonSharp } from "react-icons/io5";
import { useTheme } from 'next-themes';

const DarkSwitch = () => {
const [opened,setOpen] = useState(false);
const { systemTheme, theme, setTheme } = useTheme();
const currentTheme = theme === "system" ? systemTheme : theme;

useEffect(() => setOpen(true), []);

  return (
  <div className="flex items-center space-x-5 ">
   {opened &&
        (currentTheme === "dark" ? (
          <MdOutlineWbSunny
            className="text-xl cursor-pointer hover:text-amber-500"
            onClick={() => setTheme("light")}
          />
        ) : (
          <IoMoonSharp
            className="text-xl cursor-pointer hover:text-amber-500"
            onClick={() => setTheme("dark")}
          />
        ))}
    <span className="font-bold bg-slate-300 px-5 py-2 rounded-full text-indigo-900 select-none">IMDB</span>
  </div>
  )
}

export default DarkSwitch