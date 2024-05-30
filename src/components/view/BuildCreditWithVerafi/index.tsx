import { Button } from '@/components/ui/button'
import React from 'react'

export const BuildCreditWithVerafi = () => {
    return (

        <>

            <div className="relative  flex items-center justify-center">
                <div className="relative">
                    <img src="/Groupbuildcreditwithverafi.svg" alt="Background" className="w-auto h-auto" />
                    <div className="absolute top-44 left-96 ">
                        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                            Build Credit
                        </h1>
                        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                            with <span className="text-blue-500">Verafi</span>
                        </h1>


                    </div>
                    <div className="absolute top-80 left-72 ">
                        <p className=" italic  text-xs text-start text-black font-semibold">
                            
                            Building credit on-chain should be easy. Make data-driven decision and use <br /> your crypto to buy the future you want.
                        </p>
                    </div>
                    <div className="absolute top-96 mt-6 left-96 pl-20">
                    <Button className=' hover:bg-white bg-blue-500 text-white' variant="outline">Learn More</Button>
                    </div>
                </div>
            </div>

        </>


    )
}
