import React from 'react'
import {AiOutlineArrowRight} from "react-icons/ai"


export default function FlexItem({data}) {
console.log(data)
  return (
    <div className='flex flex-col min-w-[300px] h-[340px] rounded-[8px] shadow'>
        <div>
        <img src={data.image} alt='highlight-img' className='w-full h-[170px] rounded-t-[8px]'/>
        </div>
        <div className='p-5 flex flex-col justify-between h-full'>
            <p className='card-heading text-xl w-full'>{data.title}</p>
            <p className='heading font-normal'>{data.description}</p>
            <AiOutlineArrowRight className="justify-self-end self-end icon"/>
        </div>
    </div>
  )
}
