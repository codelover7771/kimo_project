import React from 'react'
import Categories from './Categories'
import Guide from './Guide'

function CandD() {
  return (
    <div className='w-full bg-[#E6F2F2] pb-10'>
        <div className='w-[95%] md:w-3/4 md:flex m-auto gap-4 align-center'>
            <Categories/>
            <Guide/>
        </div>
    </div>
  )
}

export default CandD
