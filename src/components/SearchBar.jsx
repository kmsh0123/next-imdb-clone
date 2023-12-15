"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
   const [search, setSearch] = useState("");
  const router = useRouter();
  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
    }
    
return (
    <form onSubmit={handleSubmit} className='bg-blue-900 p-5 text-yellow-500 flex justify-between'>
        <input 
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        className='outline-none border-none bg-transparent w-full h-full' type="text" placeholder='Search....' />
        <button
        disabled = {!search}
        type='submit'
        className='disabled:text-black'
        >Search</button>
    </form>
  )
}

export default SearchBar