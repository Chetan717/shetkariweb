import React, { useEffect } from "react";
import HomePage from "./Home/index";
import { useDispatch } from "react-redux";
import { blogData } from "@/Store/Slice/DataSlice";
export default function index({ data }) {
  const dispatch =useDispatch()
useEffect(()=>{
dispatch(blogData(data))
},[])

  return (
    <>
      <div className="flex flex-col ">
        <HomePage data={data} />
      
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  let response = await fetch("https://shetkariserver-com.vercel.app/FarmBlog");
  let data = await response.json();

  return {
    props: {
      data,
    },
  };
};
