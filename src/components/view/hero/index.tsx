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

        <div className="absolute bottom-10 mt-80 left-2/3  pl-40  ">
    <Button className=' hover:bg-white bg-blue-500 text-white ' variant="outline">Get Started</Button>
        
        </div>

        </div>
        </div>


  )     
}
