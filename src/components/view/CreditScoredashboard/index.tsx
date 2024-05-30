import { Button } from '@/components/ui/button'
import React from 'react'

export const CreditScoredashboard = () => {
  return (
   
    <> 
      
    <div className="relative  flex items-center justify-center">
    <div className="relative">
      <img src="/GroupCreditScoredashboard.svg" alt="Background" className="w-auto h-auto" />
      <div className="absolute top-32 left-1/3  pl-52 ">
    <Button className=' hover:bg-white bg-blue-500 text-white' variant="outline">Check your Score</Button>
        
        </div>
        </div>
        </div>
        </>
  )
}
