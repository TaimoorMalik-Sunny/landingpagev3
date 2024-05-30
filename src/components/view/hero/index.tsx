import { Button } from '@/components/ui/button'
import React from 'react'

export const Hero = () => {
  return (
    <div className="relative  flex items-center justify-center">
    <div className="relative">
      <img src="/Grouphero.svg" alt="Background" className="w-auto h-auto" />
      <div className="absolute top-96 mt-80 left-2/3  pl-40  ">
    <Button className=' hover:bg-white bg-blue-500 text-white ' variant="outline">Get Started</Button>
        
        </div>

        <div className="absolute bottom-40 mt-80 right-2/3  pr-16  ">
    <Button className=' hover:bg-white bg-blue-500 text-white ' variant="outline">Create</Button>
        
        </div>

        <div className="absolute bottom-52  right-1/3  pr-32  ">
    <Button className=' hover:bg-white bg-blue-500 text-white ' variant="outline">Sale Now</Button>
        
        </div>

        <div className="absolute bottom-40  right-16  pr-32  ">
    <Button className=' hover:bg-white bg-blue-500 text-white ' variant="outline">Connect</Button>
        
        </div>
        
        </div>
        </div>


  )     
}
