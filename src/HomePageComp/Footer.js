import React from 'react'
import Social from './Social'

export default function Footer() {
  return (
    <>
      <a  href='https://wa.me/message/TG2DXE2CHRKNG1'> <img alt="whatsapp" className='fixed lg:top-[550px]  lg:left-[1250px] animate-bounce left-[300px] md:left-[600px] shadow-3xl top-[500px] lg:w-12 w-10 h-10 lg:h-12 ' src="https://img.icons8.com/color/48/null/whatsapp--v1.png"/></a>
    <div className=" mt-5  ">
  <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div className="flex flex-col items-center border-t pt-6">
 <p className='p-2 text-black font-bold '>+91-8766825876</p>
      
    
<Social/>
  
    <p className='p-2 text-black font-bold'>shetkariweb717@gmail.com</p>
    <p className='p-2 text-orange-500 font-bold'>⚜ Jai Shree Krishna ⚜</p>
   <a className='text-blue font-medium p-2 text-sm' href='https://harisoftwares.vercel.app' target='blank'>Powered By HariSoftwares</a>
    </div>

    <div className="py-8 text-center text-sm text-gray-400">© 2023 - Present shetkariweb.com All rights reserved.</div>
  </footer>
</div>
    
    
    
    </>
  )
}
