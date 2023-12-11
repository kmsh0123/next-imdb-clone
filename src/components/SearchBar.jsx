import React from 'react'

const SearchBar = () => {
  return (
    <form className='bg-blue-900 p-5 text-yellow-500 '>
        <input className='outline-none border-none bg-red-900 w-full' type="text" placeholder='Search....' />
    </form>
  )
}

export default SearchBar