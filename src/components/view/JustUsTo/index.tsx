import { Button } from '@/components/ui/button'
import React from 'react'

export const JustUsTo = () => {
  return (
  
     <> 
      
      <div className="relative  flex items-center justify-center">
      <div className="relative">
        <img src="/GroupJustUsto.svg" alt="Background" className="w-auto h-auto" />
        <div className="absolute top-16 left-40 ">
          
          <div className='flex-col '>
          <h1 className="scroll-m-20 text-4xl font-semibold text-center text-white tracking-tight lg:text-5xl">
          Join Us to make The Lending <br/> better 
      </h1>
      
      <p className=" text-center top-20 text-white leading-7 [&:not(:first-child)]:mt-6">
      Learn how tailored lending is better for you
    </p>
    <div className='flex justify-center mt-16 '>
    <Button  variant="outline">Learn More</Button>
    </div>
          </div>

          

          </div>
     

  </div>
  </div>
  </>
  )
}
