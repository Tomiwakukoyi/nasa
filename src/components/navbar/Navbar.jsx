import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShareIcon from "@mui/icons-material/Share";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [input, setInput] = useState(false);

  function toggleInput() {
    if (!input) {
      setInput(true);
    } else {
      setInput(false);
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
          <div className="flex items-center justify-center w-24 h-[84px] focus:bg-[#15418c] ">
            <a>
              <span className="text-[21px]">NASA TV</span>
            </a>
          </div>
          <div className="flex items-center gap-1 mr-2">
            {input && (
              <input
                type="text"
                placeholder="Search"
                className="h-12 placeholder:text-white placeholder:opacity-30 placeholder:font-thin placeholder:pl-[10px]
               right-[70px] absolute rounded-md border-2 border-white outline-2 outline-offset-2 outline-white bg-[#333333]"
              />
            )}
            <SearchIcon className=" z-10 text-lg mr-3" onClick={toggleInput} />

            <ShareIcon style={{ fontSize: "20px" }} />
            <MenuIcon style={{ fontSize: "34px" }} />
          </div>
        </div>
      </div>

      <div>
        <div>
          <a href="">Topics</a>
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
