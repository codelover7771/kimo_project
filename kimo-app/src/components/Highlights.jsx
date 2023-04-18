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
    <div className='w-full pb-12 justify-center items-center'>
        <div className='w-5/6 m-auto mt-[24px] md:w-3[95%]'>
            <div className='h-[80px] flex items-center'>
                <p className='heading'>Highlights</p>
            </div>
            <div className='w-full h-[340px] flex gap-3 overflow-auto scrollbar-hide md:px-0'>
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
