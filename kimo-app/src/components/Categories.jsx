import React,{useState,useEffect} from 'react'
import {AiOutlineArrowRight} from "react-icons/ai"
import axios from 'axios'

function Categories() {
    const [data,setData] = useState([]) 
    useEffect(() => {
        axios
        .get("https://web-dev.dev.kimo.ai/v1/categories")
        .then((result) => {
          console.log(result.data);
          setData(result.data);
        })
        .catch((error) => console.log(error));
    },[])
      console.log(data)  
  return (
    <div className='w-1/2'>
        <div className='mt-[40px] heading'>
            Categories
        </div>
        <div className='flex-row items-center '>
                {
                    data.map((elem,index)=>
                        <div key={index} className='flex justify-between p-[24px] rounded-[8px] bg-white mt-[10px]'>
                            <div className='heading font-normal'>{elem.name}</div><div>
                            <AiOutlineArrowRight className="justify-self-end self-end icon" />
                        </div></div>
)

}
                    </div>
        </div>
  )
} 

export default Categories