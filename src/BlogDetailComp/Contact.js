import React from "react";

export default function Contact() {
  return (
    <>
      <section className=" bg-white  body-font relative">
        <div className="container mx-auto">
          <div className="flex flex-col text-center w-full ">
            <h1 className="sm:text-3xl text-2xl font-medium title-font  text-gray-900">
              Comment
            </h1>
          </div>
          <form
            action="https://formspree.io/f/mkneaooo"
            method="POST"
            className="lg:w-1/2 md:w-2/3 mx-auto"
          >
            <div className="flex flex-col  ">
              <div className="p-2 w-full">
                <div className="relative">
                  <label for="message" className="leading-7 text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <button className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded-[20px] text-lg">
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
