import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShareIcon from "@mui/icons-material/Share";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Navbar = () => {
  const [input, setInput] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  function toggleInput() {
    if (!input) {
      setInput(true);
    } else {
      setInput(false);
    }
  }
  function toggleDropdown() {
    if (!dropdown) {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  }

  return (
    <div className=" text-white bg-hero bg-contain h-[135px]">
      <div className="flex items-center  justify-between h-[85px]">
        <img
          src="/images/nasa-logo.svg"
          alt="nasa logo"
          className=" h-20 w-20 ml-2 lg:mt-14 lg:h-28 w-28 lg:ml-6 "
        />

        {/* Navbar for large screens */}
        <div className="hidden lg:flex flex-col items-center justify-center gap-5 mt-14 mr-[60px]">
          {/* Top Nav */}
          <div className="flex items-center text-[18px] gap-4">
            <a href="">Missions</a>
            <div className=" h-12 w-0.5 bg-gray-600" />
            <a href="">Galleries</a>
            <div className=" h-12 w-0.5 bg-gray-600" />
            <a href="">Nasa TV</a>
            <div className=" h-12 w-0.5 bg-gray-600" />
            <a href="">Follow NASA</a>
            <div className=" h-12 w-0.5 bg-gray-600" />
            <a href="">Downloads</a>
            <div className=" h-12 w-0.5 bg-gray-600" />
            <a href="">About</a>
            <div className=" h-12 w-0.5 bg-gray-600" />
            <a href="">NASA Audiences</a>
          </div>

          {/* Bottom Nav */}
          <div className="flex items-center gap-4 flex-nowrap bg-[#555555] h-10 w-full text-sm px-3">
            <a href="">Humans in Space</a>
            <div className=" h-8 w-[1px] bg-gray-400" />
            <a href="">Moon to Mars</a>
            <div className=" h-8 w-[1px] bg-gray-400" />
            <a href="">Earth</a>
            <div className=" h-8 w-[1px] bg-gray-400" />
            <a href="">Space Tech</a>
            <div className=" h-8 w-[1px] bg-gray-400" />
            <a href="">Flight</a>
            <div className=" h-8 w-[1px] bg-gray-400" />
            <a href="">Solar System and Beyond</a>
            <div className=" h-8 w-[1px] bg-gray-400" />
            <a href="">STEM Management</a>
            <div className=" h-8 w-[1px] bg-gray-400" />
            <a href="">History</a>
            <div className=" h-8 w-[1px] bg-gray-400" />
            <a href="">Benefits to You</a>
          </div>
        </div>

        {/* Navbar for smaller screens */}
        <div className="flex gap-4">
          <div className="flex cursor-pointer items-center justify-center  w-24 h-[84px] hover:bg-[#15418c] sm:mr-44 lg:hidden ">
            <a>
              <span className="text-[21px]  ">NASA TV</span>
            </a>
          </div>
          <div className="flex items-center gap-1">
            {input ? (
              <input
                type="text"
                placeholder="Search"
                className="h-12 sm:hidden mr-10 placeholder:text-white placeholder:opacity-30 placeholder:font-thin placeholder:pl-[10px]
               right-[40px] absolute rounded-md border-2 border-white focus:outline-none outline-2 outline-offset-2 outline-white bg-[#333333]"
              />
            ) : (
              <input
                type="text"
                placeholder="Search"
                className=" hidden sm:block sm:mr-3 lg:right-[38px]  h-12 mr-10 placeholder:text-white placeholder:opacity-30 placeholder:font-thin placeholder:pl-[10px]
               right-[70px] absolute  rounded-sm focus:border-2 focus:border-white focus:outline-none outline-2 outline-offset-2  bg-[#333333]"
              />
            )}
            <div className="z-10 sm:hidden">
              <SearchIcon className="text-lg mr-1" onClick={toggleInput} />
            </div>
            <div className="z-10 right-[5.35rem] absolute hidden sm:block lg:right-[3.5rem]">
              <SearchIcon className=" z-10 hidden sm:block text-lg " />
            </div>

            <ShareIcon
              className="cursor-pointer stroke-white stroke-1 lg:mr-5"
              style={{ fontSize: "20px" }}
            />
            <div className=" lg:hidden">
              {dropdown ? (
                <div className="flex items-center justify-center bg-[#15418c] h-full ">
                  <MenuIcon
                    onClick={toggleDropdown}
                    className=" stroke-white stroke-1 ml-3 mr-3  "
                    style={{
                      fontSize: "30px",
                    }}
                  />
                </div>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <MenuIcon
                    onClick={toggleDropdown}
                    className=" stroke-white stroke-1 ml-3 mr-3  "
                    style={{
                      fontSize: "30px",
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Nav for Mobile screens */}
      {dropdown && (
        <div className="bg-[#15418c] w-full ">
          <div className=" flex items-center justify-between text-xl ml-4 mr-2">
            <a href="">Topics</a>
            <KeyboardArrowDownIcon
              className="stroke-white stroke-2   cursor-pointer"
              sx={{ fontSize: "40px" }}
            />
          </div>
          <div className=" flex items-center justify-between text-xl ml-4 mr-2">
            <a href="">Missions</a>
            <KeyboardArrowDownIcon
              className="stroke-white stroke-2   cursor-pointer"
              sx={{ fontSize: "40px" }}
            />
          </div>
          <div className=" flex items-center justify-between text-xl ml-4 mr-2">
            <a href="">Galleries</a>
            <KeyboardArrowDownIcon
              className="stroke-white stroke-2   cursor-pointer"
              sx={{ fontSize: "40px" }}
            />
          </div>
          <div className=" flex items-center justify-between text-xl ml-4 mr-2">
            <a href="">Follow NASA</a>
            <KeyboardArrowDownIcon
              className="stroke-white stroke-2   cursor-pointer"
              sx={{ fontSize: "40px" }}
            />
          </div>
          <div className=" flex items-center justify-between text-xl ml-4 mr-2">
            <a href="">Topics</a>
            <KeyboardArrowDownIcon
              className="stroke-white stroke-2   cursor-pointer"
              sx={{ fontSize: "40px" }}
            />
          </div>
          <div className=" flex items-center justify-between text-xl ml-4 mr-2">
            <a href="">Topics</a>
            <KeyboardArrowDownIcon
              className="stroke-white stroke-2   cursor-pointer"
              sx={{ fontSize: "40px" }}
            />
          </div>
          <div className=" flex items-center justify-between text-xl ml-4 mr-2">
            <a href="">Topics</a>
            <KeyboardArrowDownIcon
              className="stroke-white stroke-2  cursor-pointer"
              sx={{ fontSize: "40px" }}
            />
          </div>
        </div>
      )}
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
