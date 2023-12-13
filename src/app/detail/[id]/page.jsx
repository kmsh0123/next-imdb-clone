"use client";
import {useGetDetailsQuery, useGetMoviesQuery } from '@/app/api/movieApi';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react'

const Detail = () => {
  const {id} = useParams();
  const {data} = useGetDetailsQuery({id});
  console.log(data?.title);
 
 
  return (
    <div className='max-w-6xl mx-auto'>
     Movie : {data?.title}
    </div>
  )
}

export default Detail