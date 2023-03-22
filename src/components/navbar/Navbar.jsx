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
    <div className=" text-white bg-hero bg-contain">
      <div className="flex items-center justify-between h-[85px]">
        <img
          src="/images/nasa-logo.svg"
          alt="nasa logo"
          className=" h-20 w-20 ml-2"
        />
        <div className="flex gap-4">
          <div className="flex cursor-pointer items-center justify-center w-24 h-[84px] hover:bg-[#15418c] ">
            <a>
              <span className="text-[21px]">NASA TV</span>
            </a>
          </div>
          <div className="flex items-center gap-1">
            {input && (
              <input
                type="text"
                placeholder="Search"
                className="h-12 placeholder:text-white placeholder:opacity-30 placeholder:font-thin placeholder:pl-[10px]
               right-[70px] absolute rounded-md border-2 border-white outline-2 outline-offset-2 outline-white bg-[#333333]"
              />
            )}
            <SearchIcon className=" z-10 text-lg mr-3" onClick={toggleInput} />

            <ShareIcon
              className="stroke-white stroke-1 mr-2"
              style={{ fontSize: "20px" }}
            />
            {dropdown ? (
              <div className="flex items-center justify-center bg-[#15418c] h-full">
                <MenuIcon
                  onClick={toggleDropdown}
                  className=" stroke-white stroke-1 mr-5 ml-5 "
                  style={{
                    fontSize: "30px",
                  }}
                />
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <MenuIcon
                  onClick={toggleDropdown}
                  className=" stroke-white stroke-1 mr-5 ml-5 "
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
        <div className="bg-[#15418c] w-full">
          <div className=" flex items-center justify-between text-xl ml-4 mr-4">
            <a href="">Topics</a>
            <KeyboardArrowDownIcon
              className="stroke-white stroke-2  cursor-pointer"
              sx={{ fontSize: "40px" }}
            />
          </div>
          <div className=" flex items-center justify-between text-xl ml-4 mr-4">
            <a href="">Missions</a>
            <KeyboardArrowDownIcon
              className="stroke-white stroke-2  cursor-pointer"
              sx={{ fontSize: "40px" }}
            />
          </div>
          <div className=" flex items-center justify-between text-xl ml-4 mr-4">
            <a href="">Galleries</a>
            <KeyboardArrowDownIcon
              className="stroke-white stroke-2  cursor-pointer"
              sx={{ fontSize: "40px" }}
            />
          </div>
          <div className=" flex items-center justify-between text-xl ml-4 mr-4">
            <a href="">Follow NASA</a>
            <KeyboardArrowDownIcon
              className="stroke-white stroke-2  cursor-pointer"
              sx={{ fontSize: "40px" }}
            />
          </div>
          <div className=" flex items-center justify-between text-xl ml-4 mr-4">
            <a href="">Topics</a>
            <KeyboardArrowDownIcon
              className="stroke-white stroke-2  cursor-pointer"
              sx={{ fontSize: "40px" }}
            />
          </div>
          <div className=" flex items-center justify-between text-xl ml-4 mr-4">
            <a href="">Topics</a>
            <KeyboardArrowDownIcon
              className="stroke-white stroke-2  cursor-pointer"
              sx={{ fontSize: "40px" }}
            />
          </div>
          <div className=" flex items-center justify-between text-xl ml-4 mr-4">
            <a href="">Topics</a>
            <KeyboardArrowDownIcon
              className="stroke-white stroke-2 cursor-pointer"
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
