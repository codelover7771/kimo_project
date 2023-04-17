import React, { useEffect, useState } from 'react'
import axios from 'axios'
import FlexItem from './FlexItem'

export default function Highlights() {
    const [data,setData] = useState([]) 
    useEffect(() => {
        axios
        .get("https://web-dev.dev.kimo.ai/v1/highlights")
        .then((result) => {
          console.log(result.data);
          setData(result.data);
        })
        .catch((error) => console.log(error));
    },[])
      console.log(data)  
  return (
    <div className='w-full justify-center items-center'>
        <div className='w-3/4 m-auto mt-[24px] md:w-9/10'>
            <div className='mb-[24px]'>
            <p className='heading'>Highlights</p>
            </div>
            <div className='w-full h-[340px] flex gap-2 overflow-auto scrollbar-hide md:px-0'>
                {
                    data.map((elem,index)=>
                        <FlexItem key={index} data={elem}/>
                    )
                }               
            </div>


        </div>
    </div>
  )
}
