import BlogList from "@/HomePageComp/BlogList";
import Head from "@/HomePageComp/Header";
import Cookies from "@/cookies/Cookies";
import React from "react";

export default function index({ data }) {
  return (
    <>
<Head>


  
</Head>

      <div className="flex flex-col">
        <BlogList data={data} />
        <Head />

        <Cookies/>
      </div>
    </>
  );
}
