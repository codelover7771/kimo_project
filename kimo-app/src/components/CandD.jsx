import React from 'react'
import Categories from './Categories'
import Guide from './Guide'

function CandD() {
  return (
    <div className='w-full bg-[#E6F2F2] h-[528px]'>
        <div className='w-3/4 flex m-auto align-center'>
            <Categories/>
            <Guide/>
        </div>
    </div>
  )
}

export default CandD
