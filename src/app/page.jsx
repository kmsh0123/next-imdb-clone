"use client"

import Card from '@/components/Card'
import React from 'react'
import { useGetMoviesQuery } from './api/movieApi'


const Home = () => {
  const {data} = useGetMoviesQuery();
  const mvLists = (data?.results);
  console.log(mvLists);
  return (
    <div className="grid grid-cols-4 max-w-6xl mx-auto">
     {
      mvLists?.map(mv=>(
        <Card key={mv.id} mv={mv}/>
      ))
     }
    </div>
  )
}

export default Home