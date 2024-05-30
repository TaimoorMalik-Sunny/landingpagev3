import { Button } from '@/components/ui/button'
import React from 'react'

export const Hero = () => {
  return (
    <div className="relative  w-96 h-96 bg-cover bg-center bg-no-repeat shadow-lg rounded-lg" style={{ backgroundImage: "url('/GroupJustUsto.svg')" }}>
       
              <div className=' flex absolute'>
    <Button className=' hover:bg-white bg-blue-600 text-white' variant="outline">Check your Score</Button>
        </div> 
           {/* <img src="Grouphero.svg" alt="Image wrap" className=" relative " /> */}
         
 
         </div>


  )     
}
