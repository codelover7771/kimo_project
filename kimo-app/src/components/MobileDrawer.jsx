import Hamburger from 'hamburger-react'
import React from 'react'

function MobileDrawer({isOpen, setOpen,menuItems}) {
  return (
    <div className='w-full h-full bg-[rgba(0,0,0,0.7)] fixed top-0 z-30'>
    <div className='bg-white w-[90vw] h-full fixed top-0 right-0 p-[24px] flex flex-col gap-12'>
        <div className='flex justify-end'>
            <Hamburger toggled={isOpen} toggle={setOpen} onClick={() => setOpen(false)}/>
        </div>
        <div className='flex flex-col ml-[40px] gap-[2.5rem]'>
          <div className="font-IBM-Plexo justify-between menuItem">
            {
                menuItems.map((elem,index)=>
                    <div className='mt-[40px]' onClick={() => setOpen(false)} key={index}>{elem}</div>
                )
            }
          </div>
          <div>
          <button className='button'>Book a trip</button>
          </div>
      </div>
    </div>
</div>
  )
}

export default MobileDrawer