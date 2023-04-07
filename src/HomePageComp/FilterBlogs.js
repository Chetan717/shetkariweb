import React from "react";
import { Filterid } from "@/Store/Slice/FilterSlice";
import { useDispatch } from "react-redux";
export default function FilterBlogs() {
  const dispatch = useDispatch();

  const filterIdAcess = (id) => {
    dispatch(Filterid(id));
    
  };
  return (
    <>
      {/* The button to open modal */}
      <label
        htmlFor="my-modal-3"
        className="btn inline-flex gap-1 btn-sm bg-white hover:bg-green-400  text-black m-1  "
      >
        filter
        <img
          src="https://img.icons8.com/external-kmg-design-flat-kmg-design/32/null/external-filter-e-commerce-kmg-design-flat-kmg-design.png"
          alt="filter"
          className="w-5 h-5"
        />
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle " />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <h3 className="text-lg text-center  font-bold">Filter Post!</h3>
          <div className="flex flex-col  justify-center items-center">
            <div className="grid lg:grid-cols-3 grid-cols-2 gap-2">
              <a
                onClick={() => filterIdAcess("कृषी")}
                className=" hover:bg-green-500 hover:text-white border-1 border-black rounded-[20px] border-1 hover:rounded-[10px] p-2 lg:w-[150px]"
              >
                कृषी व्यवसाय 🚜{" "}
              </a>
              <a
                onClick={() => filterIdAcess("पशुपालन")}
                className=" hover:bg-green-500 hover:text-white border-1 border-black rounded-[20px]  hover:rounded-[10px] p-2  lg:w-[150px]"
              >
                पशुपालन 🐮
              </a>
              <a
                onClick={() => filterIdAcess("Education")}
                className=" hover:bg-green-500 hover:text-white border-1 border-black rounded-[20px]  hover:rounded-[10px] p-2  lg:w-[150px]"
              >
                Education 🏫
              </a>
              <a
                onClick={() => filterIdAcess("Sport")}
                className=" hover:bg-green-500 hover:text-white border-1 border-black rounded-[20px]  hover:rounded-[10px] p-2  lg:w-[150px]"
              >
                IPL/Sport 🏏
              </a>
              <a
                onClick={() => filterIdAcess("Health")}
                className=" hover:bg-green-500 hover:text-white border-1 border-black rounded-[20px]  hover:rounded-[10px] p-2  lg:w-[150px]"
              >
                Health 👩‍⚕️
              </a>
              <a
                onClick={() => filterIdAcess("Tech")}
                className=" hover:bg-green-500 hover:text-white border-1 border-black rounded-[20px]  hover:rounded-[10px] p-2  lg:w-[150px]"
              >
                Tech&Cyber👩‍⚕️
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
