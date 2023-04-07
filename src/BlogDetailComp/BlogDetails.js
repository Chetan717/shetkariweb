import ReactPlayer from "react-player";
import Image from "next/image";
import { useSelector } from "react-redux";
import img from '../../public/giphy.png'
import Link from "next/link";
import { useRouter } from "next/router";

function BlogDetails({ Data }) {
  const router = useRouter()
  
// const id = router.query.BlogDetail

// const datafiltered = Data?.filter((key)=>key._id===id)


  const data = [Data[0]];
  const data1 = Data[1];
  const data2 = Data[2];

  console.log(Data);
  if (!Data) {
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
        <div className=" py-6 mt-16 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-md px-4 md:px-8">
            {data?.map((key) => {
              return (
                <>
                  <div className="flex flex-col justify-center ">
                    <p className="lg:text-sm text-xs text-start font-bold text-red-500">
                      {" "}
                      📅 {key.date}
                    </p>
                    <h1 className="mb-4 text-start text-2xl font-bold text-black sm:text-3xl md:mb-6">
                      {" "}
                      {key.title}
                    </h1>

                    {key.image ? (
                      
                        <img
                          src={key.image}
                          loading="lazy"
                          alt={key.title}
                          className="lg:max-w-[500px] max-w-xs m-6 self-center rounded-xl object-cover object-center"
                        />
                    
                    ) : null}

                    <p className="mb-6 font-medium   text-gray-900 bg-green-100 p-3 rounded-lg sm:text-lg md:mb-8">
                      {key.descri}
                    </p>
                  </div>
                </>
              );
            })}

            {data2?.map((key) => {
              return (
                <>
                  <div className="flex gap-1 m-2 flex-col ">
                    <p className="text-black font-bold   text-xl">
                      {key.courses}
                    </p>

             

                    {key.description?.match("youtube") ? (
                      <div className="">
                        <ReactPlayer
                          width="100%"
                          height="100%"
                          url={key.description}
                        />
                      </div>
                    ) : (
                      <Link
                        className="text-blue-500  font-medium underline lg:text-xl cursor-pointer"
                        // href={}
                        href={`${key.description}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {key.courses}
                      </Link>
                    )}
                  </div>
                </>
              );
            })}

            {data1?.map((key) => {
              return (
                <>
                  <div className="flex mt-5 gap-3 flex-col">
                    <h2 className="mb-2 text-xl font-semibold text-black sm:text-2xl md:mb-4">
                      {key.subtitle}
                    </h2>

                    <p className="mb-6  bg-green-100 p-3 rounded-lg text-gray-900 font-medium sm:text-lg md:mb-8">
                      {key.discription}
                    </p>

                    <div className="flex m-3 flex-col">

                      {key.imageLink ? (
                        <div className="relative overflow-hidden rounded-lg bg-gray-100 mt-6 shadow-lg md:mb-8">
                          <img
                            src={`${key.imageLink}`}
                            loading="lazy"
                            alt="Photo by Minh Pham"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      ) : null}
                    </div>

                    <div className="flex gap-1 flex-col">
                      <p className="text-black font-bold  text-xl">
                        {key.linkName}:
                      </p>
                     
                      {key.link?.match("youtube") ? (
                        <div className=" lg:h-[250px] lg:w-[400px] mb-3 self-center rounded-[20px]">
                          <ReactPlayer
                            width="100%"
                            height="100%"
                            url={key.link}
                          />
                        </div>
                      ) : (
                        <h1
                          className="text-blue-500 font-medium underline text-xl cursor-pointer"
                          href={key.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {key.link}
                        </h1>
                      )}
                    </div>

                    {key.videoLink ? (
                      <div classNameName="flex">
                        <video
                          src={key.videoLink}
                          type="video/mp4"
                          loop="true"
                          autoplay="autoplay"
                          controls
                          muted
                          classNameName=" object-cover rounded-[10px] relative object-center  lg:w-full w-full h-[400px]   "
                        ></video>
                      </div>
                    ) : null}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
export default BlogDetails;
