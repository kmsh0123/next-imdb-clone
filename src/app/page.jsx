"use client"

import Card from '@/components/Card'
import React from 'react'
import { useGetMoviesQuery } from './api/movieApi'


const Home = () => {
  const {data} = useGetMoviesQuery();
  const mvLists = (data?.results);
  console.log(mvLists);
  return (
    <div className="sm:grid sm:grid-cols-1 md:gird md:grid-cols-4 lg:p-0 p-5 max-w-6xl mx-auto">
     {
      mvLists?.map(mv=>(
        <Card key={mv.id} mv={mv}/>
      ))
     }
    </div>
  )
}

export default Home