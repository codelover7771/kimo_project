import React, { useEffect} from 'react'
import FlexItem from './FlexItem'
import { useDispatch, useSelector } from 'react-redux';
import { fetchHighlights } from '../redux/action';

export default function Highlights (){

  // Get the dispatch function from the store and select the highlights data from the state
  const dispatch = useDispatch();
  const highlights = useSelector(state => state.highlights);

  // Fetch the highlights data on component mount using the useEffect hook and the fetchHighlights action creator
  useEffect(() => {
    dispatch(fetchHighlights());
  }, [dispatch]);
  
  return (
    <div className='w-full pb-12 justify-center items-center'>
        <div className='w-5/6 m-auto mt-[24px] md:[95%]'>
            <div className='h-[80px] flex items-center'>
                <p className='heading'>Highlights</p>
            </div>
            <div className='w-full h-[340px] flex gap-3 overflow-auto scrollbar-hide md:px-0'>
                {
                    // Render a FlexItem component for each highlight object in the array
                    highlights.map((elem,index)=>
                        <FlexItem key={index} data={elem}/>
                    )
                }               
            </div>
        </div>
    </div>
  )
}
