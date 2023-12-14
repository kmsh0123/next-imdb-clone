"use client"

import { useGetSearchQuery } from '@/app/api/movieApi';
import { setSearched } from '@/app/redux/movieSlice';
import React, { useState } from 'react'

const SearchBar = () => {
    const {data} = useGetSearchQuery();
    console.log(data);
    
return (
    <form className='bg-blue-900 p-5 text-yellow-500 flex justify-between'>
        <input 
        className='outline-none border-none bg-transparent w-full h-full' type="text" placeholder='Search....' />
        <button type='submit'>Search</button>
    </form>
  )
}

export default SearchBar