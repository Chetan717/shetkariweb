import Footer from "@/HomePageComp/Footer";
import Head from "@/HomePageComp/Header";
import React from "react";

const data = [];

export default function index() {
  return (
    <>
      <Head />
      <div className="mt-[300px] flex flex-col bg-white gap-8 justify-center text-center ">
        <p className="text-black font-bold text-xl">Our Privacy policy</p>
        <a
          className="text-blue-300 text-2xl underline "
          href="https://www.notion.so/Privacy-Policy-for-shetkariweb-com-ee3b0348b81d4aabbe7c0dd307c077b2?pvs=4"
          target="blank"
        >
          click to view Privacy Policy
        </a>

        {data.map((key) => {
          return (
            <>
              <p className="text-black text-xl">{key}</p>
            </>
          );
        })}
      </div>
      {/* <Footer /> */}
    </>
  );
}
