import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
export default function RelatedPost({ DataRelate }) {
  const DataSelected = useSelector((state) => {
    return state.Filter;
  });

  DataRelate.legth = 12;
  const Agri = DataRelate?.filter((key) => key[0].type == `${DataSelected}`);
  Agri.legth = 12;

  return (
    <>
      <div className="flex justify-center bg-white gap-10 flex-col cursor-pointer  mb-10 items-center">
        <p className="text-xl font-bold p-2">More Posts</p>
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-2 m-2 lg:m-0 lg:gap-10">
          {DataSelected === ""
            ? DataRelate?.map((key, index) => {
                return (
                  <>
                    <div key={index} class=" lg:w-[300px]  rounded-lg shadow-lg">
                      <Link href={`/detailblog/${key._id}`}>
                        <img
                          src={key[0].image}
                          alt={key[0].title}
                          class="rounded-t-lg "
                        />
                        <div class="p-6">
                          <h2 class="font-bold mb-2 text-xs text-black">
                            {key[0].title}
                          </h2>

                          <a
                            href=""
                            class="text-black hover:text-red-500 underline text-sm"
                          >
                            Read More 👉
                          </a>
                        </div>
                      </Link>
                    </div>
                  </>
                );
              })
            : Agri?.map((key, index) => {
                return (
                  <>
                    <div key={index} class="  rounded-lg shadow-lg">
                      <Link href={`/detailblog/${key._id}`}>
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
                            href=""
                            class="text-black hover:text-red-500 underline text-sm"
                          >
                            Read More 👉
                          </a>
                        </div>
                      </Link>
                    </div>
                  </>
                );
              })}
        </div>
      </div>
    </>
  );
}
