import Typer from "./TyperComp";
import "../styles/Home.module.css";
import { useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import Ads from "@/Ads/Ad";
import FilterBlogs from "./FilterBlogs";
import BlogDetails from "@/BlogDetailComp/BlogDetails";
import { useRouter } from 'next/router'
export default function BlogList({ data }) {
  const router = useRouter()
  const [limit, setLimit] = useState(12);

  const DataSelected = useSelector((state) => {
    return state.Filter;
  });

  const Agri = data?.filter((key) => key[0].type == `${DataSelected}`);

  Agri.length = limit;

  const sortedData = data.slice().sort((a, b) => b - a);

  if (!data) {
    return (
      <div className="  grid h-screen place-items-center w-screen absolute     text-green-500">
        <div className="z-10 -ml-2 lg:h-8 h-8 lg:w-8 w-8  animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="animate-spin"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="0"
            viewBox="0 0 16 16"
          >
            <path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 4c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM12.773 12.773c-1.275 1.275-2.97 1.977-4.773 1.977s-3.498-0.702-4.773-1.977-1.977-2.97-1.977-4.773c0-1.803 0.702-3.498 1.977-4.773l1.061 1.061c0 0 0 0 0 0-2.047 2.047-2.047 5.378 0 7.425 0.992 0.992 2.31 1.538 3.712 1.538s2.721-0.546 3.712-1.538c2.047-2.047 2.047-5.378 0-7.425l1.061-1.061c1.275 1.275 1.977 2.97 1.977 4.773s-0.702 3.498-1.977 4.773z"></path>
          </svg>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="flex justify-center mt-28 items-center">
          <h2 className="lg:text-2xl text-sm p-2 rounded-lg  bg-green-400 font-bold text-white ">
            <Typer />
          </h2>
        </div> 

        {/* <Ads /> */}
        
        <div className="flex flex-col   justify-center cursor-pointer   lg:mt-2 items-center">
        <div className="flex  justify-center mt-5 items-center">
          
          <FilterBlogs />   
           
         </div> 
          <div className="grid lg:grid-cols-3 lg:m-5 grid-cols-1 gap-5">
            {DataSelected === ""
              ? sortedData?.map((key, index) => {
                  return (
                    <>
                      <div
                        key={index}
                        className="flex md:w-[300px]  w-[330px] lg:m-10 m-4 justify-center"
                      >
                       
                          <div onClick={() => router.push(`/detailblog/${key._id}`)} class="  rounded-lg shadow-lg">
                            {/* <Link href={`/detailblog/${key._id}`}> */}
                              <img
                                src={key[0].image}
                                alt={key[0].title}
                                class="rounded-t-lg "
                              />
                              <div class="p-6">
                                <h2 class="font-bold mb-2 text-xl text-black">
                                  {key[0].title}
                                </h2>

                                <a
                                 
                                  class="text-black hover:text-red-500 underline text-sm"
                                >
                                  Read More 👉
                                </a>
                              </div>
                            {/* </Link> */}
                        
                        </div>
                      </div>
                    </>
                  );
                })
              : Agri.reverse()?.map((key, index) => {
                  return (
                    <>
                      <div
                      onClick={() => router.push(`/detailblog/${key._id}`)} 
                        key={index}
                        className="flex m-4  lg:m-10 justify-center"
                      >
                        {/* <Link href={`/detailblog/${key._id}`}> */}
                         
                        <div class=" md:w-[300px] rounded-lg shadow-lg">
                            {/* <Link href={`/detailblog/${key._id}`}> */}
                              <img
                                src={key[0].image}
                                alt={key[0].title}
                                class="rounded-t-lg  "
                              />
                              <div class="p-6">
                                <h2 class="font-bold mb-2 text-xl text-black">
                                  {key[0].title}
                                </h2>

                                <a
                                  
                                  class="text-black hover:text-red-500 underline text-sm"
                                >
                                  Read More 👉
                                </a>
                              </div>
                            {/* </Link> */}
                        
                        </div>
                        
                        {/* </Link> */}
                      </div>
                    </>
                  );
                })}
          </div>
        </div>

        {/* </>
                                         )
                                       })
                                    } */}

        <div
          onClick={() => setLimit(limit + 9)}
          className="table-filter-info  flex flex-row mt-10 justify-center items-center "
        >
          <button className="            hover:bg-red-500 mb-5 font-bold      text-black bg-green-500 cursor-pointer p-2 rounded-lg  inline-flex items-center md:mb-2 lg:mb-0">
            Load More
          </button>
        </div>
        <Ads />
        <Footer />
      </>
    );
  }
}
