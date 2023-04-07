import Footer from '@/HomePageComp/Footer'
import Head from '@/HomePageComp/Header'
import React from 'react'
import img from '../../../public/logos.png'
import Image from 'next/image'
export default function index() {
  return (
 <>

 
 <div className=" w-full flex justify-center items-center lg:m-0 m-1  mt-12 ">
  <div className="mx-auto max-w-screen-md px-4 md:px-8">
  <h2 className="mb-2 text-xl text-center lg:p-10 p-16 font-semibold text-gray-800 sm:text-2xl md:mb-4">About us</h2>

    <p className="mb-2 text-black font-medium sm:text-lg md:mb-8">Welcome to our blog,
     where we bring you the latest news
      and insights on a variety of 
     topics including
      agriculture, veterinary medicine, education,
       health, technology, cyber security, 
      and sports. Our team of expert writers 
      and contributors are passionate about 
      sharing their knowledge and expertise
       with our readers.
    
 
    </p>

    <p className="mb-2 text-gray-800 font-medium sm:text-lg md:mb-8">
    (आमच्या ब्लॉगवर स्वागत आहे, जिथे आम्ही तुमच्यासाठी कृषी, 
    पशुवैद्यकीय औषध, शिक्षण, आरोग्य, तंत्रज्ञान, सायबर सुरक्षा 
    आणि क्रीडा यासह विविध विषयांवरील ताज्या बातम्या आणि 
    अंतर्दृष्टी आणतो. आमची तज्ञ लेखक आणि योगदानकर्त्यांची 
    टीम त्यांचे ज्ञान आणि कौशल्य आमच्या वाचकांसोबत 
    सामायिक करण्यास उत्कट आहे.)

    </p>
    <ul className="mb-6 list-inside list- flex gap-3 flex-col text-gray-500 sm:text-lg md:mb-8">
      <li className='flex  text-black font-medium flex-col gap-2'>
At our blog, we believe that knowledge is power, and staying informed about the latest developments in these areas can help you make better decisions and lead a healthier, more productive life. Our goal is to provide you with the most accurate and up-to-date information available, so you can stay ahead of the curve and make informed decisions.
<span className='text-gray-800 font-medium'>(आमच्या ब्लॉगवर, आमचा विश्वास आहे की ज्ञान ही शक्ती आहे आणि या क्षेत्रातील नवीनतम घडामोडींची माहिती तुम्हाला अधिक चांगले निर्णय घेण्यास आणि निरोगी, अधिक उत्पादनक्षम जीवन जगण्यास मदत करू शकते. आमचे ध्येय तुम्हाला सर्वात अचूक आणि अद्ययावत माहिती उपलब्ध करून देणे हे आहे, जेणेकरून तुम्ही वक्रतेच्या पुढे राहू शकता आणि माहितीपूर्ण निर्णय घेऊ शकता.)</span>
</li>
      <li className='flex flex-col  text-black font-medium gap-2'>Whether you are a farmer looking to improve your crop yield, a pet owner seeking advice on animal health, a student looking to advance your education, or a technology enthusiast interested in the latest gadgets and trends, our blog has something for everyone.<span className='text-gray-800 font-medium'>
       (तुम्ही तुमचे पीक उत्पादन सुधारू पाहणारे शेतकरी, प्राण्यांच्या आरोग्याबाबत सल्ला घेणारे पाळीव प्राणी, तुमचे शिक्षण पुढे नेण्याचा प्रयत्न करणारे विद्यार्थी किंवा नवीनतम गॅझेट्स आणि ट्रेंडमध्ये स्वारस्य असलेले तंत्रज्ञानप्रेमी असोत, आमच्या ब्लॉगमध्ये प्रत्येकासाठी काहीतरी आहे.) 
        </span></li>
      <li className='flex flex-col gap-2  text-black font-medium' >In addition, we are passionate about sports, particularly the Indian Premier League (IPL). Our team of sports enthusiasts brings you in-depth analysis and commentary on all the IPL action, as well as other major sporting events from around the world.

<span className='text-gray-800 font-medium'>(याव्यतिरिक्त, आम्ही खेळांबद्दल, विशेषत: इंडियन प्रीमियर लीग (IPL) बद्दल उत्साही आहोत. आमचा क्रीडाप्रेमींचा संघ तुमच्यासाठी सर्व IPL कृतींचे सखोल विश्लेषण आणि समालोचन तसेच जगभरातील इतर प्रमुख क्रीडा स्पर्धा घेऊन येतो.)</span>
</li>
    </ul>

    

    <div className=" mb-6 overflow-hidden flex justify-center items-center rounded-lg  md:mb-8">
      <Image className=' ' src={img} />
    </div>

    
  </div>
</div>
<Head/>
 <Footer/>
 </>
  )
}
