import PanelSVG from "../assets/Panel.svg";
import { CiSearch } from "react-icons/ci";
import BellSVG from "../assets/BellSVG.svg";
import { IoIosArrowForward } from "react-icons/io";
import JohnDoe from "../assets/JohnDoe.svg";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useState } from "react";

const TitleBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full h-16 flex border-b justify-between border-gray-300">
      <div className="flex gap-2 justify-center items-center ">
        <img src={PanelSVG} className="p-5" alt="Panel Icon" />
        <h4 className="font-arial cursor-pointer text-gray-400 flex text-md justify-center items-center gap-1 font-medium" onClick={() => console.log("Workspace clicked")} >
          WorkSpace <IoIosArrowForward />
        </h4>
        <h4 className="font-arial cursor-pointer text-gray-400 flex text-md justify-center items-center gap-1 font-medium" onClick={() => console.log("Folder clicked")}>
          Folder <IoIosArrowForward />
        </h4>
        <h4 className="font-mono cursor-pointer" onClick={() => console.log("Spreadsheet 3 clicked")}>
          Spreadsheet 3
        </h4>
        <h4 className="font-arial text-gray-400 flex text-md justify-center items-center gap-1 font-medium cursor-pointer">
          <HiOutlineDotsHorizontal />
        </h4>
      </div>
      <div className="flex justify-center items-center gap-2">
        <div className="flex justify-between items-center gap-1.5 bg-[#F6F6F6] h-10 w-36 rounded-md px-1">
          <CiSearch className="text-gray-500 cursor-pointer" />
          <input
            type="text"
            placeholder="Search within sheet"
            className="text-xs w-28 outline-0"
            onChange={(e) => console.log("Search:", e.target.value)}
          />
        </div>
        <img src={BellSVG} className="cursor-pointer" alt="Notification Icon" />

        <img src={JohnDoe} alt="JohnDoe" className="cursor-pointer" onClick={() => setShowMenu(prev => !prev)} />
        {showMenu && (
  <div className="absolute top-16 right-5 bg-white shadow p-2 rounded">
    <p className="cursor-pointer hover:bg-gray-100 px-2 py-1 rounded" onClick={()=>console.log("Clicked View Profile")}>View Profile</p>
    <p className="cursor-pointer hover:bg-gray-100 px-2 py-1 rounded" onClick={()=>console.log("Clicked Logout")}>Logout</p>
  </div>
)}
        <div className="pr-5">
          <h4 className="text-sm">John Doe</h4>
          <p className="text-gray-400 text-xs">john.doe...</p>
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
