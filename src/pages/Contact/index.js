import Footer from '@/HomePageComp/Footer'
import Head from '@/HomePageComp/Header'
import Link from 'next/link'
import React from 'react'

export default function index() {
  return (
    <>
    <Head/>
    
    <div className="bg-white py-6 sm:py-8 mt-16 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
  
    < div className="mb-10 md:mb-16">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Get in touch</h2>
<p className="text-xl font-bold text-center text-red-500">Email Me On : shetkariweb717@gmail.com</p>
      <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Share your Review or thaughts About ShetkariWeb.com And also any query regarding Buisness.</p>
    </div>


    <form  action="https://formspree.io/f/mkneaooo"
  method="POST" className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
      <div>
        <label for="first-name" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">First name*</label>
        <input name="first-name" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div>
        <label for="last-name" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Last name*</label>
        <input name="last-name" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div className="sm:col-span-2">
        <label for="company" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Company</label>
        <input name="company" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div className="sm:col-span-2">
        <label for="email" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Email*</label>
        <input name="email" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div className="sm:col-span-2">
        <label for="subject" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Subject*</label>
        <input name="subject" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div className="sm:col-span-2">
        <label for="message" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Message*</label>
        <textarea name="message" className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"></textarea>
      </div>

      <div className="flex items-center justify-between sm:col-span-2">
        <button className="inline-block rounded-lg bg-green-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-green-300 transition duration-100 hover:bg-green-600 focus-visible:ring active:bg-green-500 md:text-base">Send</button>

        <span className="text-sm text-gray-500">*Required</span>
      </div>

      <p className="text-xs text-gray-400"> <Link href="/Privacy" className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy Policy</Link>.</p>
    </form>
 
  </div>
</div>
    
    <Footer/>
    
    </>
  )
}
