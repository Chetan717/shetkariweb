
import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import logos from "../../public/logos.png";
import Image from "next/image";
import Link from "next/link";

export default function Head() {

  const [openc, setOpenc] = useState(false);



  return (
    <>
      <div className="bg-white ">
        {/* Mobile menu */}
        <Transition.Root show={openc} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setOpenc}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-[#f4f4f4] pb-12 shadow-xl">
                  <div className="flex px-4 pt-5 pb-2">
                    <button
                      type="button"
                      className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                      onClick={() => setOpenc(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Links */}
                  <Tab.Group as="div" className="mt-2">
                    <Tab.List className="-mb-px flex flex-col space-x-8 gap-4 px-4">
                      <p></p>
                   <Link href="/" 
                      
                        className=" hover:bg-green-500 hover:text-white hover:p-2 hover:rounded-[10px] w-[150px]"
                      >
                        Home 🏘️
                      </Link>
                   <Link href="/About"
                       
                        className=" hover:bg-green-500 hover:text-white hover:p-2 hover:rounded-[10px]  w-[150px]"
                      >
                           About Us 😎
                      </Link>
                   <Link href="/Privacy"
                       
                        className=" hover:bg-green-500 hover:text-white hover:p-2 hover:rounded-[10px]  w-[150px]"
                      >
                        Privacy 👨‍🎓
                      </Link>
                   <Link href="/Contact"
                        
                        className=" hover:bg-green-500 hover:text-white hover:p-2 hover:rounded-[10px]  w-[150px]"
                      >
                       Contact Us  📳
                      </Link>
                   {/* <Link href="/Contact"
                       
                        className=" hover:bg-green-500 hover:text-white hover:p-2 hover:rounded-[10px]  w-[150px]"
                      >
                        Health 👩‍⚕️
                      </Link>
                   <Link href="/Contact"
                        
                        className=" hover:bg-green-500 hover:text-white hover:p-2 hover:rounded-[10px]  w-[150px]"
                      >
                        Tech&Cyber👩‍⚕️
                      </Link> */}

                      <p className="text-gray-800 text-sm m-10 font-medium">Version 0.1.0</p>
                    </Tab.List>

                    <Tab.Panels as={Fragment}></Tab.Panels>
                  </Tab.Group>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <header
         
          className=" fixed w-full top-[5px] rounded-full   shadow-2xl  bg-[#ffffff] "
        >
          <nav
            aria-label="Top"
            className="mx-auto  max-w-7xl px-4 sm:px-6 lg:px-8"
          >
            <div className="border-b  border-gray-200">
              <div className="flex h-16 items-center">
                {/* Logo */}
                <div className=" relative lg:right-[0px] right-[55px] flex lg:ml-0">
                  <Link href="/">
                    <span className="sr-only">Your Company</span>

                    <Image
                      className="lg:w-[250px] w-[220px] mt-2 lg:ml-0 ml-12  "
                      src={logos}
                      alt="Logo"
                    />
                  </Link>
                </div>

                {/* Flyout menus */}
                <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                  <div className="flex h-full space-x-8"></div>
                </Popover.Group>

                <div className="ml-auto  flex items-center justify-center gap-10">
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center lg:space-x-6">
                 <Link href="/"
                      
                      className="text-sm cursor-pointer m-3  font-bold text-gray-700  hover:bg-green-500 hover:text-white hover:p-2 hover:rounded-[10px]"
                    >
                      Home 🏘️
                    </Link>

                 <Link href="/About"
                   
                      className="text-sm cursor-pointer  m-3 font-bold text-gray-700  hover:bg-green-500 hover:text-white hover:p-2 hover:rounded-[10px]"
                    >
                      About Us 😎
                    </Link>
                 <Link href="/Privacy"
                    
                      className="text-sm cursor-pointer  m-3 font-bold text-gray-700  hover:bg-green-500 hover:text-white hover:p-2 hover:rounded-[10px]"
                    >
                      Privacy 👨‍🎓
                    </Link>
                 <Link href="/Contact"
                     
                      className="text-sm cursor-pointer  m-3 font-bold text-gray-700  hover:bg-green-500 hover:text-white hover:p-2 hover:rounded-[10px]"
                    >
                      Contact Us  📳
                   </Link>
                  {/* <Link href="/Contact"
                    
                      className="text-sm cursor-pointer  m-3 font-bold text-gray-700  hover:bg-green-500 hover:text-white hover:p-2 hover:rounded-[10px]"
                    >
                      Health 👩‍⚕️
                    </Link> */}
                 {/* <Link href="/Contact"
                     
                      className="text-sm cursor-pointer  m-3 font-bold text-gray-700  hover:bg-green-500 hover:text-white hover:p-2 hover:rounded-[10px]"
                    >
                      Tech & Cyber 💻
                    </Link> */}
                  </div>

                  {/* Search */}
                  <div className="flex lg:ml-6">
                    {/* <button class="inline-block lg:block text-[10px] lg:h-[50px] h-[35px] relative lg:right-[0px] right-[20px]  bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus-visible:ring ring-blue-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-2 py-2">+917387427755</button> */}
                    <button
                      type="button"
                      className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                      onClick={() => setOpenc(true)}
                    >
                      <span className="sr-only">Open menu</span>
                      <Bars3Icon className="h-6 w-6 " aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}
