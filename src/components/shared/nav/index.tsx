import { Button } from '@/components/ui/button'
import React from 'react'

export const Navbar = () => {
  return (
    <div className='flex  justify-between '>
      
      <div className='flex gap-6 mt-6'>
      <img src="vlogo.svg" alt="Image wrap" className="" />
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
      About
    </h4>  
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
    Dashboard
    </h4>  
    </div> 

    <div className=' flex mt-6 gap-6'>
    <Button className=' hover:bg-white bg-blue-600 text-white' variant="outline">Check your Score</Button>
        </div> 
    

    </div>

  )
}
