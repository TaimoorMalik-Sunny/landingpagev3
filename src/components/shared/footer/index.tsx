import React from 'react'

export const Footer = () => {
  return (
    // <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/groupfooter.svg')" }}>
    //       {/* <img src="groupfooter.svg" alt="Image wrap" className=" " /> */}

    // </div>



    <div className="relative  flex items-center justify-center">
      <div className="relative">
        <img src="/groupfooter.svg" alt="Background" className="w-auto h-auto" />
        <div className="absolute flex gap-52 top-28 left-64">
          <div className='flex-col justify-between  '>
            <h4 className="  scroll-m-20 text-xl  tracking-tight">
              About Us
            </h4>
            <h4 className="top-6 scroll-m-20 text-xl tracking-tight">
            Dashboard
            </h4>   
            <h4 className="scroll-m-20 text-xl  tracking-tight">
            Docs
            </h4>   
            <h4 className="scroll-m-20 text-xl  tracking-tight">
            Discord
            </h4>         
          </div>
          <div className='flex-col gap-y-10'>
            <h4 className="scroll-m-20 text-lg font-bold italic  tracking-tight">
            Newsletter
            </h4>
            <h4 className="scroll-m-20 text-lg font-bold italic  tracking-tight">
            LinkedIn
            </h4> 
            <h4 className="scroll-m-20 text-lg font-bold italic tracking-tight">
            YouTube
            </h4>  
            <h4 className="scroll-m-20 text-lg font-bold italic tracking-tight">
            Instagram
            </h4>   
            <h4 className="scroll-m-20 text-lg font-bold italic tracking-tight">
            Twitter
            </h4>     
          </div>
          <div className='flex-col  gap-y-16'>
          <h4 className="scroll-m-20 text-lg font-bold italic  tracking-tight">
          Contact
            </h4>
            <h4 className="scroll-m-20 text-lg font-bold italic  tracking-tight">
            Story Archive
            </h4> 
            <h4 className="scroll-m-20 text-lg font-bold italic tracking-tight">
            Privacy + Terms
            </h4>  
            <h4 className="scroll-m-20 text-lg font-bold italic tracking-tight">
            Google
            </h4>   
           
                 
          </div>
        </div>
        <div>
          <img src="vlogo.svg" alt="Image wrap" className="absolute top-0 w-32 h-32 " />
          <div className="absolute top-56 left-8  w-32 h-32 " >
            <img src="Vectorfooter.svg" alt="Image wrap" className="absolute top-0 w-8 h-8 " />
            <img src="Vectorfooter2.svg" alt="Image wrap" className="absolute top-10 w-8 h-8 " />
            <img src="Vectorfooter3.svg" alt="Image wrap" className="absolute top-20 w-8 h-8  " />

          </div>
        </div>

        <div className=" flex justify-center">
          <p className="text-sm text-muted-foreground">  All Rights Reserved 2024</p>
        </div>


      </div>
    </div>
  )
}
