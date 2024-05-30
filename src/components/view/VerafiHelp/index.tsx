import { Button } from '@/components/ui/button'
import React from 'react'

export const VerafiHelp = () => {
    return (
        <div className="relative  flex items-center justify-center">
            <div className="relative">
                <img src="/GroupVerafiHelp.svg" alt="Background" className="w-auto h-auto" />
                <div className="absolute top-20 left-24 ">

                    <h1 className="scroll-m-20 text-1xl  font-semibold text-center tracking-tight lg:text-5xl">
                        Verafi helps maintain your credit <br /> on a positive path.
                    </h1>
                    <p className=" mt-10 italic  text-xs text-center   text-gray-500 font-semibold">
                    Take control of your credit health with data-driven solutions. With Verafi, you're in charge of your financial future. <br/> Don't let the market dictate your value—empower yourself with Verafi.
                    </p>
                <div className='flex justify-center mt-10'>
                <Button className=' hover:bg-white bg-blue-500 text-white' variant="outline">Check your Vera-Score</Button>
                <Button  variant="outline">Learn More</Button>

                </div>

                </div>
            </div>
        </div>
    )
}
