import React from 'react'
import {AiOutlineArrowRight} from "react-icons/ai"

export default function FlexItem({data}) {
  return (
    <div className='flex flex-col max-w-[368px] min-w-[300px] h-[340px] rounded-[8px]' style={{boxShadow: "0px 0px 16px rgba(0, 128, 128, 0.16)"}}>
        <div>
        <img src={data.image} alt='highlight-img' className='w-full h-[170px] rounded-t-[8px]'/>
        </div>
        <div className='p-5 flex flex-col justify-between h-full w-full'>
            <p className='card-heading text-xl w-full'>{data.title}</p>
            <p className='heading font-normal'>{data.description}</p>
            <AiOutlineArrowRight className="justify-self-end self-end icon"/>
        </div>
    </div>
  )
}
