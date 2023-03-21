import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShareIcon from "@mui/icons-material/Share";

const Navbar = () => {
  const [missionsIsOpen, setMissionsIsOpen] = useState(false);

  return (
    <div className="flex items-center  h-36 bg-hero">
      <img className="ml-4" src="/images/nasa-logo.svg" alt="" />
      <div className=" flex flex-col">
        <div className="flex  items-center justify-center mb-3">
          <div className="flex items-center justify-center ">
            <a className="text-white mr-4 text-lg" href="">
              Missions
            </a>
            <div className=" h-12 w-0.5 bg-gray-500" />
          </div>
          <div className="flex items-center ">
            <a className="text-white mr-4 ml-4 text-lg" href="">
              Galleries
            </a>
            <div className=" h-12 w-0.5 bg-gray-500" />
          </div>
          <div className="flex items-center ">
            <a className="text-white mr-4 ml-4 text-lg" href="">
              NASA TV
            </a>
            <div className=" h-12 w-0.5 bg-gray-500" />
          </div>
          <div className="flex items-center ">
            <a className="text-white mr-4 ml-4 text-lg" href="">
              Follow NASA
            </a>
            <div className=" h-12 w-0.5 bg-gray-500" />
          </div>
          <div className="flex items-center ">
            <a className="text-white mr-4 ml-4 text-lg" href="">
              Downloads
            </a>
            <div className=" h-12 w-0.5 bg-gray-500" />
          </div>
          <div className="flex items-center ">
            <a className="text-white mr-4 ml-4 text-lg" href="">
              About
            </a>
            <div className=" h-12 w-0.5 bg-gray-500" />
          </div>
          <div className="flex items-center ">
            <a className="text-white ml-4 text-lg" href="">
              NASA Audience
            </a>
          </div>
          <div>
            <input
              type="text"
              placeholder="Search"
              className=" bg-[#333333] placeholder-white placeholder-opacity-40  placeholder:text-sm placeholder:font-light w-36 h-10 placeholder:focus:rounded-sm pt-2 pb-2 pl-2"
            />
            <SearchIcon
              className="absolute right-[310px] top-7 "
              style={{ color: "white" }}
            />
            <ShareIcon style={{ color: "white" }} />
          </div>
        </div>
        <div className="flex bg-[#5d7fb9] p-2 border-none mt-4">
          <div className="flex items-center justify-center text-sm text-white">
            <a className=" mr-3" href="">
              Humans in Space
            </a>
            <div className=" h-7 w-[1px] bg-gray-500" />
          </div>
          <div className="flex items-center justify-center text-sm text-white">
            <a className=" mr-3 ml-3" href="">
              Moon to Mars
            </a>
            <div className=" h-7 w-[1px] bg-gray-500" />
          </div>
          <div className="flex items-center justify-center text-sm text-white">
            <a className=" mr-3 ml-3" href="">
              Earth
            </a>
            <div className=" h-7 w-[1px] bg-gray-500" />
          </div>
          <div className="flex items-center justify-center text-sm text-white">
            <a className=" mr-3 ml-3" href="">
              Space Tech
            </a>
            <div className=" h-7 w-[1px] bg-gray-500" />
          </div>
          <div className="flex items-center justify-center text-sm text-white">
            <a className=" mr-3 ml-3" href="">
              Flight
            </a>
            <div className=" h-7 w-[1px] bg-gray-500" />
          </div>
          <div className="flex items-center justify-center text-sm text-white">
            <a className=" mr-3 ml-3" href="">
              Solar System and Beyond
            </a>
            <div className=" h-7 w-[1px] bg-gray-500" />
          </div>
          <div className="flex items-center justify-center text-sm text-white">
            <a className=" mr-3 ml-3" href="">
              Stem Engagement
            </a>
            <div className=" h-7 w-[1px] bg-gray-500" />
          </div>
          <div className="flex items-center justify-center text-sm text-white">
            <a className=" mr-3 ml-3" href="">
              History
            </a>
            <div className=" h-7 w-[1px] bg-gray-500" />
          </div>
          <div className="flex items-center justify-center text-sm text-white">
            <a className=" mr-3 ml-3" href="">
              Benefits to You
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

//  {
//    missionsIsOpen && (
//      <div className="">
//        <div>
//          <a href="#">Option 1</a>
//          <a href="#">Option 2</a>
//          <a href="#">Option 3</a>
//        </div>
//      </div>
//    );
//  }

//  onMouseEnter={() => setMissionsIsOpen(true)}
//           onMouseLeave={() => setMissionsIsOpen(false)}
