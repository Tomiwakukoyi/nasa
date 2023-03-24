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
    <div className=" text-white bg-hero bg-contain h-[85px]">
      <div className="flex items-center justify-between h-[85px]">
        <img
          src="/images/nasa-logo.svg"
          alt="nasa logo"
          className=" h-20 w-20 ml-2"
        />
        <div className="flex gap-4">
          <div className="flex cursor-pointer items-center justify-center  w-24 h-[84px] hover:bg-[#15418c] sm:mr-48  ">
            <a>
              <span className="text-[21px] ">NASA TV</span>
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
                className=" hidden sm:block sm:mr-3  h-12 mr-10 placeholder:text-white placeholder:opacity-30 placeholder:font-thin placeholder:pl-[10px]
               right-[70px] absolute  rounded-md focus:border-2 focus:border-white focus:outline-none outline-2 outline-offset-2  bg-[#333333]"
              />
            )}
            <div className="z-10">
              <SearchIcon
                className="  sm:hidden text-lg mr-1"
                onClick={toggleInput}
              />
            </div>
            <div className="z-10 right-[5.35rem] absolute hidden sm:block">
              <SearchIcon className=" z-10 hidden sm:block text-lg " />
            </div>

            <ShareIcon
              className="stroke-white stroke-1 "
              style={{ fontSize: "20px" }}
            />
            {dropdown ? (
              <div className="flex items-center justify-center bg-[#15418c] h-full">
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
