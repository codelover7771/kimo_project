import Hamburger from 'hamburger-react'
import React from 'react'
import { Link } from 'react-router-dom'

function MobileDrawer({ isOpen, setOpen, highlights }) {
  return (
    <div className='w-full h-full bg-[rgba(0,0,0,0.7)] fixed top-0 z-30'>
      <div className='bg-white w-[90vw] h-full fixed top-0 right-0 p-[24px] flex flex-col gap-12'>
        {/* Close button */}
        <div className='flex justify-end'>
          <Hamburger toggled={isOpen} toggle={setOpen} onClick={() => setOpen(false)} />
        </div>
        {/* Menu items */}
        <div className='flex flex-col ml-[40px] gap-[2.5rem]'>
          <div className="flex flex-col font-IBM-Plexo justify-between menuItem">
            {/* Home link */}
            <Link to='/' onClick={() => setOpen(false)}>Home</Link>
            {/* Dynamic activity links */}
            {highlights.map((elem, index) =>
              <Link to={`/activity/${elem.title}`} className='mt-[40px]' onClick={() => setOpen(false)} key={index}>{elem.title}</Link>
            )}
          </div>
          {/* Book a trip button */}
          <div>
            <button className='button'>Book a trip</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileDrawer
